const item1 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
};

const item2 = {
    code: "ORGB 1100",
    name: "Organizational Behaviour"
};

const item3 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
};

const courseList = [item1, item2, item3];

do {
    var user_numbers = window.prompt('Enter a 4-digit number: ');
} while (isNaN(user_numbers) === true && user_numbers.length !== 4);