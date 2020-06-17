// Dependencies 
const Employee = require("./app/Employee");
const Manager = require("./app/Manager");
const Engineer = require("./app/Engineer");
const Intern = require("./app/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve("./output");
const outputPath = path.join("team.html");

const render = require("./app/html");

const teamArray = [];

// Questions 

// Manager
const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team'
    },

    {
        type: 'input',
        name: 'managerID',
        message: 'What is this managers ID number'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email adress'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number?'
    },
]

//Engineer
const engineerQuestions = [

    {
        type: 'input',
        name: 'engiName',
        message: 'Enter the name of this engineer'
    },

    {
        type: 'input',
        name: 'engiID',
        message: 'Enter the ID number for this engineer'
    },

    {
        type: 'input',
        name: 'engiEmail',
        message: 'Enter the email adress for this engineer'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this engineers GitHub user name'
    },
]

//Intern
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of this intern'
    },

    {
        type: 'input',
        name: 'internID',
        message: 'Enter the ID number for this intern',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email adress for this intern'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this interen attend, if this intern is not currently attending a school enter "N/A" ',
    },
]

//This question will promt the user if they want to add another employee

const anotherOne = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the type of team member you would like to add next, if you are done select "Done"',
        choices: ['Engineer', 'Intern', 'Done']
    }
]
 


//Starting function 
function init() {
        
        managerPromt();
}


//Function that will promt the user to select the next type of employee they are adding 
function next() {
    inquirer.prompt(anotherOne).then((response) => {
        
        console.log(response);
        switch (response.nextEmployee) {
            case 'Engineer':
                engineerPromt();
                break;
            case 'Intern':
                internPromt();
                break;
            case 'Done':
                console.log('Your page is created!')
                createTeam();
        }
    })
}
//Function for the manager questions that will be called first when initiated
function managerPromt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        const manager = new Manager(name, id, email, office);
        //Pushes the new manager object to the empty array to be used later 
        teamArray.push(manager);
        //This will call the next function which will promt the user to select the next type of employee they are adding 
        console.log(teamArray);

        next();
    })
}
//Function for Engineer promts
function engineerPromt() {
    inquirer.prompt(engineerQuestions).then((response) => {

        let name = response. engiName;
        let id = response.engiID;
        let email = response.engiEmail;
        let github = response.github;
        const engineer = new Engineer (name, id, email, github);
        teamArray.push(engineer);
        console.log(teamArray);
        
        next();
    })
}

//Function for Intern promts
function internPromt() {
    inquirer.prompt(internQuestions).then((response) => {

        let name = response. internName;
        let id = response.internID;
        let email = response.internEmail;
        let school = response.school;

        const intern = new Intern (name, id, email, school);

        teamArray.push(intern);
        console.log(teamArray);

       
        next();
    })
}

//Function to make the file 
function createTeam() {
fs.writeFile(outputPath, render(teamArray), function(err) {
if (err) { 
    return console.log(err)
}
})

}

//calls the initiating function 
init();
