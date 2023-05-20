import React, { useState } from 'react';
export default function TextExpander(_a) {
    var children = _a.children, limit = _a.limit;
    var text = children || '';
    var _b = useState(true), isTruncated = _b[0], setIsTruncated = _b[1];
    var resultString = isTruncated ? text.slice(0, limit) : text;
    function toggleTruncate() {
        setIsTruncated(!isTruncated);
    }
    return (React.createElement("div", null,
        resultString,
        React.createElement("p", { onClick: toggleTruncate, style: { color: 'blue', cursor: 'pointer' } }, isTruncated ? '...show more' : ' show less')));
}
//# sourceMappingURL=TextExpander.js.map