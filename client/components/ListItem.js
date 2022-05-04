"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const react_1 = __importDefault(require("react"));
const tabler_icons_react_1 = require("tabler-icons-react");
const todos_1 = require("../api/todos");
function ListItem(props) {
    const { toggle, setToggle, token, todoItem } = props;
    const { description, createdAt, _id, updatedAt, progression } = todoItem;
    async function handleCheck(e) {
        await (0, todos_1.patchTodoAPIParams)(Object.assign(Object.assign({}, todoItem), { progression: !progression }), token);
        setToggle(!toggle);
    }
    function handleDelete() {
        (0, todos_1.deleteTodoAPIParams)(_id, token);
        setToggle(!toggle);
    }
    return (react_1.default.createElement(core_1.Group, { position: 'center' },
        react_1.default.createElement(core_1.Checkbox, { color: 'lime', radius: 'xl', id: _id, onChange: handleCheck, checked: progression }),
        react_1.default.createElement(core_1.ActionIcon, { onClick: handleDelete },
            react_1.default.createElement(tabler_icons_react_1.Trash, { size: 18, color: '#d27979' })),
        react_1.default.createElement(core_1.Blockquote, { icon: null, cite: createdAt.slice(0, 25) },
            description,
            react_1.default.createElement("p", null,
                "Last updated: ",
                updatedAt.slice(0, 25)))));
}
exports.default = ListItem;
//# sourceMappingURL=ListItem.js.map