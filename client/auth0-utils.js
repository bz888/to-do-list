"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheUser = void 0;
const user_1 = require("./actions/user");
const store_1 = __importDefault(require("./store"));
async function cacheUser(useAuth0) {
    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    if (isAuthenticated) {
        try {
            const accessToken = await getAccessTokenSilently();
            const userToSave = {
                auth0Id: user === null || user === void 0 ? void 0 : user.sub,
                email: user === null || user === void 0 ? void 0 : user.email,
                token: accessToken
            };
            store_1.default.dispatch((0, user_1.setUser)(userToSave));
        }
        catch (err) {
            console.error(err);
        }
    }
}
exports.cacheUser = cacheUser;
//# sourceMappingURL=auth0-utils.js.map