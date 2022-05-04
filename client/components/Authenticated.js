"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IfNotAuthenticated = exports.IfAuthenticated = void 0;
const auth0_react_1 = require("@auth0/auth0-react");
const react_1 = __importDefault(require("react"));
const isAuthenticated = () => {
    const { isAuthenticated } = (0, auth0_react_1.useAuth0)();
    return isAuthenticated;
};
function IfAuthenticated({ children }) {
    return isAuthenticated()
        ? react_1.default.createElement(react_1.default.Fragment, null, children)
        : null;
}
exports.IfAuthenticated = IfAuthenticated;
function IfNotAuthenticated({ children }) {
    return !isAuthenticated()
        ? react_1.default.createElement(react_1.default.Fragment, null, children)
        : null;
}
exports.IfNotAuthenticated = IfNotAuthenticated;
//# sourceMappingURL=Authenticated.js.map