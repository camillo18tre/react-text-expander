import React, { useState } from 'react';
export default function TextExpander(_a) {
    var children = _a.children, _b = _a.lines, lines = _b === void 0 ? 3 : _b, _c = _a.showLessLabel, showLessLabel = _c === void 0 ? 'less' : _c, _d = _a.showMoreLabel, showMoreLabel = _d === void 0 ? 'more' : _d, textClassName = _a.textClassName, textStyle = _a.textStyle, buttonClassName = _a.buttonClassName, buttonStyle = _a.buttonStyle, _e = _a.isExpanded, isExpanded = _e === void 0 ? false : _e;
    var _f = useState(!isExpanded), isTruncated = _f[0], setIsTruncated = _f[1];
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
    return (React.createElement("div", null,
        React.createElement("div", { style: textStyle, className: textClassName },
            React.createElement("p", { style: truncateStyles }, children)),
        React.createElement("button", { onClick: toggleTruncate, style: buttonStyle, className: buttonClassName }, isTruncated ? showMoreLabel : showLessLabel)));
}
//# sourceMappingURL=TextExpander.js.map