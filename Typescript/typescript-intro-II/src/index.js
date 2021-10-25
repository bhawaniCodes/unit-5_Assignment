var nam = "Bhanu";
var age = 24;
var isFetching = true;
var numbers = [5, 4, 3, 2, 1];
var strings = ['h', 'e', 'l', 'l', 'o'];
var tuple = ['bhanu', false];
var position;
(function (position) {
    position[position["User"] = 0] = "User";
    position[position["SuperUser"] = 1] = "SuperUser";
    position[position["Admin"] = 2] = "Admin";
    position[position["SuperAdmin"] = 3] = "SuperAdmin";
})(position || (position = {}));
function nums(x, y) {
    var output = (x / y);
    return output;
}
function printHere(name) {
    console.log(name);
}
