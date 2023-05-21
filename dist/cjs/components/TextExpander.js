"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
function TextExpander(_a) {
    var children = _a.children, _b = _a.lines, lines = _b === void 0 ? 3 : _b, _c = _a.showLessLabel, showLessLabel = _c === void 0 ? 'less' : _c, _d = _a.showMoreLabel, showMoreLabel = _d === void 0 ? 'more' : _d, textClassName = _a.textClassName, textStyle = _a.textStyle, buttonClassName = _a.buttonClassName, buttonStyle = _a.buttonStyle, _e = _a.isExpanded, isExpanded = _e === void 0 ? false : _e;
    var _f = (0, react_1.useState)(!isExpanded), isTruncated = _f[0], setIsTruncated = _f[1];
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