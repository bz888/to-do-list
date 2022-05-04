"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../actions/user");
const emptyUser = {
    auth0Id: '',
    email: '',
    token: ''
};
function user(state = emptyUser, action) {
    switch (action.type) {
        case user_1.SET_USER:
            return action.user;
        case user_1.CLEAR_USER:
            return emptyUser;
        default:
            return state;
    }
}
exports.default = user;
//# sourceMappingURL=user.js.map