const votes = require("./votes");

const nim = process.argv[0];

votes.filter(val => {
  if (val.nim == nim) {
    console.log(val);
  }
});
