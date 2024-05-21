import chalk from 'chalk';
import inquirer from 'inquirer';
// Classes, Players & Opponents.
class Player {
    constructor(name) {
        this.fuel = 1000;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 1000;
        this.name = name;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
// Player name & Opponent select
const player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name:"
});
const opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
// Gather data
const p1 = new Player(player.name);
const o1 = new Opponent(opponent.select);
do {
    //skeleton
    if (opponent.select == "Skeleton") {
        const ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "What do you want to do?",
            choices: ["Attack", "Drink Potion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Potion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //assassin
    if (opponent.select == "Assassin") {
        const ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "What do you want to do?",
            choices: ["Attack", "Drink Potion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Potion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        const ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: "What do you want to do?",
            choices: ["Attack", "Drink Potion", "Run For Your Life.."],
        });
        if (ask.opt == "Attack") {
            const num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name}'s fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name}'s fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                }
            }
            else {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${o1.name}'s fuel is ${o1.fuel}`));
                console.log(chalk.bold.green(`${p1.name}'s fuel is ${p1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink Potion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink Health Potion Your Fuel Is ${p1.fuel}`));
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
