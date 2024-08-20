// tuple
var response;
response = [200, "User created successfully", true];
// another example
var rgb = [255, 255, 125];
// enum
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
    Role["TEACHER"] = "teacher";
})(Role || (Role = {}));
var alex = Role.USER;
var carla = Role.ADMIN;
var james = Role.TEACHER;
console.log(alex);
console.log(carla);
console.log(james);
