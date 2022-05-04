"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoAPIParams = exports.patchTodoAPI = exports.patchTodoAPIParams = exports.addTodoAPI = exports.getAllTodosAPI = void 0;
const superagent_1 = __importDefault(require("superagent"));
const rootURL = '/api/v1';
function logError(err) {
    if (err.message === 'Forbidden') {
        throw new Error('Only authicated users may access');
    }
    else {
        console.error('Erro consuming the API (client side/api.js)', err.message);
    }
}
function getAllTodosAPI(token) {
    return superagent_1.default.get(`${rootURL}/todos/get/testing`)
        .set('authorization', `Bearer ${token}`)
        .then(res => {
        return res.body;
    })
        .catch(logError);
}
exports.getAllTodosAPI = getAllTodosAPI;
function addTodoAPI(todo, token) {
    return superagent_1.default.post(`${rootURL}/todos/post/testing`)
        .set('authorization', `Bearer ${token}`)
        .send({ todo })
        .then(res => res.body.todoDB)
        .catch(logError);
}
exports.addTodoAPI = addTodoAPI;
function patchTodoAPIParams(todo, token) {
    return superagent_1.default.patch(`${rootURL}/todos/update/testing/${todo._id}`)
        .set('authorization', `Bearer ${token}`)
        .send({ todo })
        .then(res => res.body.todoDB)
        .catch(logError);
}
exports.patchTodoAPIParams = patchTodoAPIParams;
function patchTodoAPI(todo, token) {
    console.log('patchTodoAPI: ', todo);
    return superagent_1.default.patch(`${rootURL}/todos/update/testing/`)
        .set('authorization', `Bearer ${token}`)
        .send({ todo })
        .then(res => res.body.todoDB)
        .catch(logError);
}
exports.patchTodoAPI = patchTodoAPI;
function deleteTodoAPIParams(id, token) {
    return superagent_1.default.delete(`${rootURL}/todos/delete/testing/${id}`)
        .set('authorization', `Bearer ${token}`)
        .then(res => res.body.todoDB)
        .catch(logError);
}
exports.deleteTodoAPIParams = deleteTodoAPIParams;
//# sourceMappingURL=todos.js.map