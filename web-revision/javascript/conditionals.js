let marks = 75;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let role = "student";

switch (role) {
    case "admin":
        console.log("Admin Dashboard");
        break;

    case "student":
        console.log("Student Portal");
        break;

    default:
        console.log("Unknown role");
}