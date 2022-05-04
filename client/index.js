"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth0_react_1 = require("@auth0/auth0-react");
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const App_1 = __importDefault(require("./components/App"));
const store_1 = __importDefault(require("./store"));
document.addEventListener('DOMContentLoaded', () => {
    (0, react_dom_1.render)(react_1.default.createElement(auth0_react_1.Auth0Provider, { domain: 'dev-ll77ct3d.au.auth0.com', clientId: 'j8UD4h1MvV9mjpV61dWkONmY5qw95y9J', redirectUri: window.location.origin, audience: 'https://todos/api' },
        react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(App_1.default, null)))), document.getElementById('app'));
});
//# sourceMappingURL=index.js.map