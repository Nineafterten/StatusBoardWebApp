angular.module("statusBoardApp", [
    "announcements",
    "bandwidth",
    "bus",
    "projects"
])
.controller("statusBoardAppController", function($scope) {
    console.log("statusBoardAppController loaded");
});