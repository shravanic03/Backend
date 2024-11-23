const {readFileSync,writeFileSync}= require('fs')
console.log("start")
const first=readFileSync("./content/second.txt","utf-8");

const second = writeFileSync("./content/record.txt","Hello this is written file",{flag:'a'});
console.log(first)
console.log("Done")
console.log("Starting with next one")
