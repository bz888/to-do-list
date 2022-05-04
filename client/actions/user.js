"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUser = exports.setUser = exports.CLEAR_USER = exports.SET_USER = void 0;
exports.SET_USER = 'SET_USER';
exports.CLEAR_USER = 'CLEAR_USER';
function setUser(user) {
    return {
        type: exports.SET_USER,
        user
    };
}
exports.setUser = setUser;
function clearUser() {
    return {
        type: exports.CLEAR_USER
    };
}
exports.clearUser = clearUser;
//# sourceMappingURL=user.js.map