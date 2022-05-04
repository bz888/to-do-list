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
const tabler_icons_react_1 = require("tabler-icons-react");
const todos_1 = require("../api/todos");
function AddTodo(props) {
    const { token, toggle, setToggle, setModal, modal } = props;
    const initPostState = { description: '', progression: false };
    const [postForm, setPostForm] = (0, react_1.useState)(initPostState);
    function handleChange(e) {
        setPostForm(Object.assign(Object.assign({}, postForm), { [e.target.name]: e.target.value }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        await (0, todos_1.addTodoAPI)(postForm, token);
        setPostForm(Object.assign({}, initPostState));
        setModal(false);
        setToggle(!toggle);
    }
    return (react_1.default.createElement(core_1.Drawer, { opened: modal, position: "right", onClose: () => setModal(false), title: "Add New To do", padding: "xl", size: "xl" },
        react_1.default.createElement(core_1.Group, { spacing: "xl" },
            react_1.default.createElement("label", { htmlFor: 'description' }, "Description: "),
            react_1.default.createElement(core_1.Input, { "data-autofocus": true, icon: react_1.default.createElement(tabler_icons_react_1.Checklist, null), variant: "unstyled", type: 'text', placeholder: "New To do", value: postForm.description, name: 'description', radius: "xs", size: "xs", onChange: handleChange }),
            react_1.default.createElement(core_1.Button, { leftIcon: react_1.default.createElement(tabler_icons_react_1.Plus, { size: 20 }), variant: "outline", color: "indigo", radius: "xs", size: "md", compact: true, onClick: handleSubmit }, "Add"))));
}
exports.default = AddTodo;
//# sourceMappingURL=AddTodo.js.map