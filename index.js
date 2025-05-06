import { addTask, updateTask, deleteTask, markTask, listTasks } from "./taskManager.js";

const [action, ...args] = process.argv.slice(2);

switch (action) {
  case "add":
    addTask(args[0]);
    break;
  case "update":
    updateTask(args[0], args[1]);
    break;
  case "delete":
    deleteTask(args[0]);
    break;
  case "mark":
    markTask(args[0], args[1]);
    break;
  case "list":
    listTasks(args[0]);
    break;
  default:
    console.log("Invalid command. Use: add, update, delete, mark, list");
}
