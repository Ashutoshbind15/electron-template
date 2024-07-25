// show the pwd

const fs = require("fs");
const path = require("path");

export function pwd() {
  console.log("pwd");
  console.log(path.resolve());
}
