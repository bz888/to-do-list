"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth0_react_1 = require("@auth0/auth0-react");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const auth0_utils_1 = require("../auth0-utils");
const core_1 = require("@mantine/core");
const tabler_icons_react_1 = require("tabler-icons-react");
const Dashboard_1 = __importDefault(require("./Dashboard"));
const Home_1 = __importDefault(require("./Home"));
const SignedIn_1 = __importDefault(require("./SignedIn"));
function App() {
    (0, auth0_utils_1.cacheUser)(auth0_react_1.useAuth0);
    const [colorScheme, setColorScheme] = (0, react_1.useState)('light');
    function handleColorScheme(value) {
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    }
    const dark = colorScheme === 'dark';
    return (react_1.default.createElement(core_1.ColorSchemeProvider, { colorScheme: colorScheme, toggleColorScheme: handleColorScheme },
        react_1.default.createElement(core_1.MantineProvider, { theme: { fontFamily: 'IBM Plex Mono, monospace', colorScheme, headings: { fontFamily: 'IBM Plex Mono, monospace' } }, withGlobalStyles: true },
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: 'dashboard', element: react_1.default.createElement(Dashboard_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: 'signedin', element: react_1.default.createElement(SignedIn_1.default, null) })),
            react_1.default.createElement(core_1.ActionIcon, { style: { position: 'fixed', top: '95vh', left: '20vw' }, onClick: () => handleColorScheme(), title: "Toggle color scheme" }, dark ? react_1.default.createElement(tabler_icons_react_1.BulbOff, { size: 18 }) : react_1.default.createElement(tabler_icons_react_1.Bulb, { size: 18 })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map