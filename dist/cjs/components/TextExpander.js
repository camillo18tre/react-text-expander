"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function TextExpander(_a) {
    var children = _a.children, lines = _a.lines, showLessLabel = _a.showLessLabel, showMoreLabel = _a.showMoreLabel, textClassName = _a.textClassName, textStyle = _a.textStyle, buttonClassName = _a.buttonClassName, buttonStyle = _a.buttonStyle;
    var _b = (0, react_1.useState)(true), isTruncated = _b[0], setIsTruncated = _b[1];
    var truncateStyles = isTruncated
        ? {
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lines,
        }
        : {};
    function toggleTruncate() {
        setIsTruncated(!isTruncated);
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: textStyle, className: textClassName },
            react_1.default.createElement("p", { style: truncateStyles }, children)),
        react_1.default.createElement("button", { onClick: toggleTruncate, style: buttonStyle, className: buttonClassName }, isTruncated ? showMoreLabel : showLessLabel)));
}
exports.default = TextExpander;
//# sourceMappingURL=TextExpander.js.map