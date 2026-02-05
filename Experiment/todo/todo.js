const fs = require("fs");
//function readTodos() {
//const data = fs.readFileSync("todo.json","utf-8");
//return JSON.parse(data);
//}
//console.log(readTodos());
function writeTodos(todos) {
  fs.writeFileSync("todo.json",JSON.stringify(todos,null,2));
}
console.log(writeTodos("hello"));

