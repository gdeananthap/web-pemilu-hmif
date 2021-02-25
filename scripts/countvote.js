var votes = require("./votes.json");
const fs = require("fs");

var voteCount = {
  "13518042": {
    votes: 0
  },
  "18218005": {
    votes: 0
  },
  kosong: {
    votes: 0
  }
};
votes.forEach(function(vote) {
  if (vote.votefor == "") return;
  voteCount[vote.votefor].votes += 1;
});

fs.writeFileSync("result.json", JSON.stringify(voteCount));

console.log(voteCount);
