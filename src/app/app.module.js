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
.controller("statusBoardAppController", function($scope) {
    console.log("statusBoardAppController loaded");
});