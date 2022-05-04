"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserByAuth = exports.addUser = void 0;
const superagent_1 = __importDefault(require("superagent"));
const rootURL = '/api/v1';
function logError(err) {
    if (err.message === 'Forbidden') {
        throw new Error('user is unauthicated');
    }
    else {
        console.error('Erro consuming the API (client side/api.js)', err.message);
    }
}
function addUser(user) {
    return superagent_1.default.post(`${rootURL}/users/`)
        .send({ user })
        .then(res => res.body)
        .catch(logError);
}
exports.addUser = addUser;
function checkUserByAuth(uid, token) {
    return superagent_1.default.post(`${rootURL}/users/checkuser/${uid}`)
        .set('authorization', `Bearer ${token}`)
        .send({ token })
        .then(res => res.body)
        .catch(logError);
}
exports.checkUserByAuth = checkUserByAuth;
//# sourceMappingURL=user.js.map