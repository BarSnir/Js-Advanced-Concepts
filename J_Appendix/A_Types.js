// Number 
let a = 5;

// String 
let $b = "I'm string " + a;
console.log($b);

// Boolean
let _c = true/false;
console.log(_c);

const inquirer = require('inquirer')
var questions = [{
  type: 'input',
  name: 'name',
  message: "What's your name?",
}]
inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
});