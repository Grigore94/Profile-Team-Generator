const path = require('path');
const fs = require('fs');
const templates = path.resolve(name, "../html");

const define = employees => {
    const html = [];

    html.push(employees.filter(employee => employee.getStatus() === "Manager")
    .map(manager => defineManager(manager)));
    html.push(employees.filter(employee => employee.getStatus() === "Engineer")
    .map(engineer => defineEngineer(engineer)));
    html.push(employees.filter(employee => employee.getStatus() === "Intern")
    .map(intern => defineIntern(intern)));
    return defineMain(html.join(""));
}