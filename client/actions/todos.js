"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTodoList = exports.fetchTodoListSuccess = exports.fetchTodoListPending = exports.TODOLIST_SUCCESS = exports.TODOLIST_PENDING = void 0;
const todos_1 = require("../api/todos");
const error_1 = require("./error");
exports.TODOLIST_PENDING = 'TODOLIST_PENDING';
exports.TODOLIST_SUCCESS = 'TODOLIST_SUCCESS';
function fetchTodoListPending() {
    console.log('fetch pending');
    return {
        type: exports.TODOLIST_PENDING
    };
}
exports.fetchTodoListPending = fetchTodoListPending;
function fetchTodoListSuccess(todos) {
    return {
        type: exports.TODOLIST_SUCCESS,
        todos
    };
}
exports.fetchTodoListSuccess = fetchTodoListSuccess;
function fetchTodoList(token) {
    console.log('fetchTodoList hit');
    return (dispatch) => {
        dispatch(fetchTodoListPending());
        return (0, todos_1.getAllTodosAPI)(token)
            .then(todolist => {
            console.log('fetch func action hit');
            dispatch(fetchTodoListSuccess(todolist));
            return null;
        })
            .catch(err => {
            var _a;
            console.error(err);
            const errMessage = ((_a = err.response) === null || _a === void 0 ? void 0 : _a.text) || err.message;
            dispatch((0, error_1.showError)(errMessage));
        });
    };
}
exports.fetchTodoList = fetchTodoList;
//# sourceMappingURL=todos.js.map