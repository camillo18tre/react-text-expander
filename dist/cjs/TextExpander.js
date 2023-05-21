"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function TextExpander(_a) {
    var children = _a.children, limit = _a.limit, showMore = _a.showMore, showLess = _a.showLess;
    var text = children || '';
    var _b = (0, react_1.useState)(true), isTruncated = _b[0], setIsTruncated = _b[1];
    var resultString = isTruncated ? text.slice(0, limit) : text;
    function toggleTruncate() {
        setIsTruncated(!isTruncated);
    }
    return (react_1.default.createElement("div", null,
        resultString,
        react_1.default.createElement("p", { onClick: toggleTruncate, style: { color: 'blue', cursor: 'pointer' } }, isTruncated ? showMore : showLess)));
}
exports.default = TextExpander;
//# sourceMappingURL=TextExpander.js.map