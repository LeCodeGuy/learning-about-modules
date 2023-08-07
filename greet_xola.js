import chalk from 'chalk';
import figlet from "figlet";
//import the greet module that is in the current folder
import greet from './greet.js'

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

figlet.text(
    greet('Xola'),
  function (err, data) {
    console.log(chalk.bgGreen.black(data));
  }
);