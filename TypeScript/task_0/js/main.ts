interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York"
};

const student2: student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "New York"
};

const studentsList: student[] = [student1, student2];

console.log(studentsList);


//Create a table element
const table = document.createElement('table');

//Create header row
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Last Name';
const header3 = document.createElement('th');
header3.textContent = 'Age';
const header4 = document.createElement('th');
header4.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
headerRow.appendChild(header3);
headerRow.appendChild(header4);

table.appendChild(headerRow);

//Append rows to the table for each student
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;
    const ageCell = document.createElement('td');
    ageCell.textContent = student.age.toString();
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(lastNameCell);
    row.appendChild(ageCell);
    row.appendChild(locationCell);

    table.appendChild(row);
});

//Append the table to the body
document.body.appendChild(table);
