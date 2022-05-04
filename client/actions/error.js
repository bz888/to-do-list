"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideError = exports.showError = exports.HIDE_ERROR = exports.SHOW_ERROR = void 0;
exports.SHOW_ERROR = 'SHOW_ERROR';
exports.HIDE_ERROR = 'HIDE_ERROR';
function showError(errorMessage) {
    return {
        type: exports.SHOW_ERROR,
        errorMessage: errorMessage
    };
}
exports.showError = showError;
function hideError() {
    return {
        type: exports.HIDE_ERROR
    };
}
exports.hideError = hideError;
//# sourceMappingURL=error.js.map