const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve("./templates");

const render = employees => {
    const html = [];

    html.push(employees.filter(employee => employee.getStatus() === "Manager")
    .map(manager => renderManager(manager)));
    html.push(employees.filter(employee => employee.getStatus() === "Engineer")
    .map(engineer => renderEngineer(engineer)));
    html.push(employees.filter(employee => employee.getStatus() === "Intern")
    .map(intern => renderIntern(intern)));
    return renderMain(html.join(""));
};
//
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"),"utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "status", manager.getStatus());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "officenumber", manager.getOfficeNumber());
    template = replacePlaceholders(template, "id", manager.getId());
    return template;
};
//
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"),"utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "status", engineer.getStatus());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    template = replacePlaceholders(template, "id", engineer.getId());
    return template;
};
//
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"),"utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "status", intern.getStatus());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "school", intern.getSchool());
    template = replacePlaceholders(template, "id", intern.getId());
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return replacePlaceholders(template, "team", html);
  };
  
  const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}","gm");
    return template.replace(pattern, value);
  };
  
  module.exports = render;
