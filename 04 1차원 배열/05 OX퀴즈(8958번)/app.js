// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const cnt = Number(input[0]);
let answer = "";

for (let i = 1; i <= cnt; i++) {
  let score = 0;
  let plus = 1;
  input[i].split('').map((input)=>{
    if (input=="O") {
      score += plus;
      plus++;
    } else {
      plus = 1;
    }
  })
  answer += score+"\n";
}

console.log(answer);