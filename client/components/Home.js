"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth0_react_1 = require("@auth0/auth0-react");
const react_1 = __importDefault(require("react"));
const Authenticated_1 = require("./Authenticated");
const core_1 = require("@mantine/core");
const react_router_dom_1 = require("react-router-dom");
function Home() {
    const { loginWithRedirect, logout } = (0, auth0_react_1.useAuth0)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    function handleLogin(e) {
        e.preventDefault();
        loginWithRedirect({
            redirectUri: `${window.location.origin}/signedin`
        });
    }
    function handleLogout(e) {
        e.preventDefault();
        logout({
            returnTo: window.location.origin
        });
    }
    function handleRedirect(e) {
        e.preventDefault();
        navigate('/dashboard');
    }
    return (react_1.default.createElement(core_1.Center, { style: { height: '100vh' } },
        react_1.default.createElement(core_1.Stack, { align: 'center' },
            react_1.default.createElement("div", null,
                react_1.default.createElement(core_1.Title, null, "welcome to your to do list")),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Authenticated_1.IfNotAuthenticated, null,
                    react_1.default.createElement(core_1.Group, { position: 'center', spacing: 'xl' },
                        react_1.default.createElement(core_1.Button, { variant: "subtle", color: "dark", onClick: handleLogin }, "Login"),
                        react_1.default.createElement(core_1.Button, { variant: "subtle", color: "dark", onClick: handleLogin }, "SignUp")))),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Authenticated_1.IfAuthenticated, null,
                    react_1.default.createElement(core_1.Group, { position: 'center', spacing: 'xl' },
                        react_1.default.createElement(core_1.Button, { variant: "subtle", color: "dark", onClick: handleRedirect }, "Contine"),
                        react_1.default.createElement(core_1.Button, { variant: "subtle", color: "dark", onClick: handleLogout }, "Logout")))))));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map