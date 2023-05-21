import React, { useState } from 'react';
export default function TextExpander(_a) {
    var children = _a.children, lines = _a.lines, showLessLabel = _a.showLessLabel, showMoreLabel = _a.showMoreLabel, textClassName = _a.textClassName, textStyle = _a.textStyle, buttonClassName = _a.buttonClassName, buttonStyle = _a.buttonStyle, _b = _a.isExpanded, isExpanded = _b === void 0 ? false : _b;
    var _c = useState(!isExpanded), isTruncated = _c[0], setIsTruncated = _c[1];
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