import * as fs from "fs";
const data = fs.readFileSync(__dirname + '/input.txt').toString().split('\n').map(v => parseInt(v))
const fuel = data.map((mass) => Math.floor(mass / 3) - 2).reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(fuel)