"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = __importDefault(require("./reducers"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
const store = (0, redux_1.createStore)(reducers_1.default, composeEnhancers() && window.__REDUX_DEVTOOLS_EXTENSION__());
exports.default = store;
//# sourceMappingURL=store.js.map