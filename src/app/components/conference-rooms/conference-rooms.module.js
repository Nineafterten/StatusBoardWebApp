angular.module('conference-rooms', [])

.controller('conferenceRoomsController', ['$scope', '$window', function($scope, $window) {
    console.log('conferenceRoomsController loaded');

    // Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID = '543856616790-u27f5rt9ornoberh9b90k5hq81rm689l.apps.googleusercontent.com';
var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
var TIMEZONE = 'America/Los_Angeles';
var MAX_COLUMNS = 4; //max columns before wrapping
var REFRESH_INTERVAL = 59; //seconds until refresh room status
var ROOM_AVAILIBILITY = 15; //minutes threshold before a busy room shows as available soon

/**
 * Enum to specify which time format to use
 */
var TimeFormat = Object.freeze({
    HOURS: 1,
    MINUTES: 2
});

/**
 * Room container class for associated name and id
 */
var Room = function(name, id) {
    this.name = name;
    this.id = id;
    this.busy = false;
    this.next = 0;
}

/**
 * Time container class for remaining time and format
 */
var RoomTime = function(time, format) {
    this.time = time;
    this.format = format;
}

/**
 * Return the time type as a string based on format and plurality
 */
RoomTime.prototype.getFormatString = function() {
    switch(this.format) {
    case TimeFormat.HOURS:
        return (this.time == 1 ? 'hour' : 'hours');
    case TimeFormat.MINUTES:
        return (this.time == 1 ? 'min' : 'mins');
    }

    return '';
}

/**
 * List of rooms and their calendar identifiers
 */
var ROOMS = [
    new Room("Eastlake", "l4mobile.com_2d3736343436353538323839@resource.calendar.google.com"),
    new Room("Foos", "l4mobile.com_2d3834303135353732353834@resource.calendar.google.com"),
    new Room("Kirkland", "l4mobile.com_2d3635393137343130353732@resource.calendar.google.com"),
    new Room("Loft", "l4mobile.com_3536343130393238343238@resource.calendar.google.com"),
    new Room("Nook", "l4mobile.com_343039313235312d3536@resource.calendar.google.com"),
    new Room("Seattle", "l4mobile.com_2d39323933393236342d373537@resource.calendar.google.com"),
    new Room("Studio", "l4mobile.com_3334333436303839333638@resource.calendar.google.com"),
    new Room("Westlake", "l4mobile.com_2d3334393734333831323337@resource.calendar.google.com")
];

/**
 * Increase the date value by provided number of days
 */
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

/**
 * Check if current user has authorized this application.
 */
$window.checkAuth = function() {
    gapi.auth.authorize({
        'client_id': CLIENT_ID,
        'scope': SCOPES,
        'immediate': true
    }, handleAuthResult);
}

/**
 * Handle response from authorization server.
 *
 * @param {Object} authResult Authorization result.
 */
function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');

    if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        loadCalendarApi();
    } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
    }
}

/**
 * Initiate auth flow in response to user clicking authorize button.
 *
 * @param {Event} event Button click event.
 */
$scope.handleAuthClick = function(event) {
    gapi.auth.authorize({
        client_id: CLIENT_ID,
        scope: SCOPES,
        immediate: false
    }, handleAuthResult);

    return false;
};

/**
 * Load Google Calendar client library. List upcoming events
 * once client library is loaded.
 */
function loadCalendarApi() {
    gapi.client.load('calendar', 'v3', initRoomsTable);
}

/**
 * Initialize our rooms table and start room update timer
 */
function initRoomsTable() {
    var roomDivs = document.getElementById('rooms');
    // var row = tbody.insertRow(-1);
    // var colcount = 0;

    //create initial table layout
    for (var i = 0; i < ROOMS.length; i++) {
        // if (colcount == MAX_COLUMNS) {
        //     row = tbody.insertRow(-1);
        //     colcount = 0;
        // }

        var room = ROOMS[i];
        var roomElement = getRoomElement(room.name);

        roomDivs.innerHTML += '<div id="' + room.name + '" class="room">' + roomElement + '</div>';
        //row.innerHTML += "<td id=\"" + room.name + "\" class=\"room free\">" + roomElement + "</td>";
        //colcount++;
    }

    queryRoomStatus();
}

/**
 * Return a the structured element (table) for a room
 *
 * @param {String} room name
 */
function getRoomElement(name) {
    var info = '<div id="' + name + 'Time" class="room-time"></div>' +
        '<div id="' + name + 'Format" class="room-format"></div>';
    // var info = "<font id=\"" + name + "Time\" class=\"time\"></font><br>" +
    //     "<font id=\"" + name + "Format\" class=\"format\"></font>";

    return '<div class="room-title">' + name + '</div>' +
            '<div id="' + name + 'Status">' + info + '</div>';
    // return "<table width=\"100%\">" + 
    //     "<tr><td>" + name + "</td><td align=\"center\" width=\"50\">" + info + "</td></tr>" +
    //     "</table>";
}

/**
 * Get a summary of the rooms and their availability
 */
function queryRoomStatus() {
    var items = [];

    //build json array of rooms to query
    for (var i = 0; i < ROOMS.length; i++) {
        items.push({
            'id': ROOMS[i].id
        });
    }

    var now = new Date();
    var request = gapi.client.calendar.freebusy.query({
        'timeMin': now.toISOString(),
        'timeMax': now.addDays(1).toISOString(),
        'timeZone': TIMEZONE,
        'items': items
    });

    request.execute(function(response) {
        for (var i = 0; i < ROOMS.length; i++) {
            var room = ROOMS[i];
            var calendar = response.calendars[room.id];

            if (calendar != null) {
                room.next = 0;
                room.busy = false;

                //check room schedule
                for (var x = 0; x < calendar.busy.length; x++) {
                    var start = new Date(calendar.busy[x].start);
                    var end = new Date(calendar.busy[x].end);

                    if (now < start) {
                        //next time room is free
                        room.next = start - now;
                        break;
                    } else if (now > start && now < end) {
                        //room is busy until
                        room.next = end - now;
                        room.busy = true;
                        break;
                    }
                }
            }
        }

        updateRoomStatus();

        //repeat query at the specified interval
        setTimeout('queryRoomStatus()', REFRESH_INTERVAL * 1000);
    });
}

/**
 * Update the table with the room status
 */
function updateRoomStatus() {
    for (var i = 0; i < ROOMS.length; i++) {
        var room = ROOMS[i];
        var roomTime = getRoomTime(room.next);
        var roomStatus = !room.busy ? 'free' :
            ((roomTime.format == TimeFormat.MINUTES && roomTime.time < ROOM_AVAILIBILITY) ? 'soon' : 'busy');

        document.getElementById(room.name + "Status").className = "room-info " + roomStatus;
        document.getElementById(room.name + "Time").innerText = roomTime.time;
        document.getElementById(room.name + "Format").innerText = roomTime.getFormatString();
    }
}

/**
 * Round time to nearest minute or hour and format for display
 *
 * @param {Float} time difference in milliseconds
 */
function getRoomTime(millis) {
    if (millis == 0) {
        //the room is free for at least next 24 hours
        return new RoomTime(24, TimeFormat.HOURS);
    }

    var time;
    var format;
    var min = millis / 1000 / 60;

    if (min < 1) {
        time = 1;
        format = TimeFormat.MINUTES;
    } else if (min < 120) {
        //show as minutes when less than 2 hours
        time = Math.round(min);
        format = TimeFormat.MINUTES;
    } else {
        time = Math.round(min / 60);
        format = TimeFormat.HOURS;
    }

    return new RoomTime(time, format);
}


}])

.directive('widgetConferenceRooms', function() {
    return {
        templateUrl: './components/conference-rooms/conference-rooms.html'
    };
});