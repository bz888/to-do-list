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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const user_1 = require("../api/user");
function SignedIn() {
    const userStore = (0, react_redux_1.useSelector)(state => state.user);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { email, token } = userStore;
    const [loading, setLoading] = (0, react_1.useState)(false);
    async function userChecker() {
        (0, user_1.checkUserByAuth)(email, token)
            .then(userData => {
            if (userData === null) {
                (0, user_1.addUser)(userStore);
            }
            return null;
        })
            .then(() => {
            setLoading(false);
        })
            .catch(() => {
            navigate('/');
        });
    }
    (0, react_1.useEffect)(() => {
        setLoading(() => true);
        userChecker();
    }, [userStore]);
    async function handleClick(e) {
        e.preventDefault();
        if (!userStore) {
            console.log('Error Setting user');
        }
        else {
            navigate('/dashboard');
        }
    }
    return (react_1.default.createElement(core_1.Center, { style: { height: '100vh' } }, loading
        ? react_1.default.createElement(core_1.Loader, { color: "grape", size: "xl", variant: "dots" })
        : react_1.default.createElement(core_1.Button, { variant: "subtle", color: "dark", onClick: handleClick }, "Continue")));
}
exports.default = SignedIn;
//# sourceMappingURL=SignedIn.js.map