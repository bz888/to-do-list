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
const core_1 = require("@mantine/core");
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const tabler_icons_react_1 = require("tabler-icons-react");
const todos_1 = require("../api/todos");
const AddTodo_1 = __importDefault(require("./AddTodo"));
const ListItem_1 = __importDefault(require("./ListItem"));
function Dashboard() {
    const userStore = (0, react_redux_1.useSelector)(state => state.user);
    const [todoList, setTodoList] = (0, react_1.useState)([]);
    const [modal, setModal] = (0, react_1.useState)(false);
    const [toggle, setToggle] = (0, react_1.useState)(false);
    const { token } = userStore;
    const { logout } = (0, auth0_react_1.useAuth0)();
    function getTodoList(token) {
        (0, todos_1.getAllTodosAPI)(token)
            .then(todoArray => {
            setTodoList(todoArray);
            return null;
        })
            .catch(err => console.error(err.message));
    }
    (0, react_1.useEffect)(() => {
        if (token !== '') {
            getTodoList(token);
        }
    }, [userStore, toggle]);
    function handleLogout(e) {
        e.preventDefault();
        logout();
    }
    function handleClick(e) {
        e.preventDefault();
        setModal(true);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Space, { h: 'xl' }),
        react_1.default.createElement(core_1.Container, { size: 500 },
            react_1.default.createElement(core_1.Group, null,
                react_1.default.createElement(core_1.Title, null, "Your List"),
                react_1.default.createElement(core_1.ActionIcon, { onClick: handleClick },
                    react_1.default.createElement(tabler_icons_react_1.CirclePlus, null)),
                react_1.default.createElement(core_1.ActionIcon, { onClick: handleLogout },
                    react_1.default.createElement(tabler_icons_react_1.Logout, null))),
            react_1.default.createElement(core_1.Space, { h: 'xl' }),
            react_1.default.createElement(AddTodo_1.default, { modal: modal, token: token, setToggle: setToggle, toggle: toggle, setModal: setModal }),
            react_1.default.createElement(core_1.Accordion, null, todoList.map((todo, idx) => {
                return (react_1.default.createElement(core_1.Accordion.Item, { label: todo.description },
                    react_1.default.createElement(ListItem_1.default, { key: idx, token: token, todoItem: todo, setToggle: setToggle, toggle: toggle })));
            })))));
}
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map