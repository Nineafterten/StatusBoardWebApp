angular.module("statusBoardApp", [
    "announcements",
    "bandwidth",
    "bus",
    "calendar",
    "conference-rooms",
    "foosball-games",
    "foosball-scores",
    "foosball-teams",
    "noise",
    "projects",
    "traffic"
])
.factory('jquery', [
    '$window',
    function ($window) {
        return $window.jQuery;
    }
])
.factory('lodash', [
    '$window',
    function ($window) {
        return $window._;
    }
])
.controller("statusBoardAppController", function($scope) {
    console.log("statusBoardAppController loaded");
});