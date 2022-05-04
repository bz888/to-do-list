"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoList = void 0;
const todos_1 = require("../actions/todos");
function todoList(state = [], action) {
    switch (action.type) {
        case todos_1.TODOLIST_SUCCESS:
            console.log('todo reducer: ', action);
            return action.todos;
        default:
            return state;
    }
}
exports.todoList = todoList;
//# sourceMappingURL=todos.js.map