const votes = require("./votes.json");

let sum = 0;

votes.forEach(val => {
  if (val.votefor !== "") {
    sum += 1;
  }
});

console.log(sum);
