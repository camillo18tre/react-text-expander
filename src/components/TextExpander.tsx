import React, { useState } from 'react'
import type { TextExpanderType } from '../types/Types'

export default function TextExpander({
  children,
  lines = 3,
  showLessLabel = 'less',
  showMoreLabel = 'more',
  textClassName,
  textStyle,
  buttonClassName,
  buttonStyle,
  isExpanded = false,
}: TextExpanderType) {
  const [isTruncated, setIsTruncated] = useState(!isExpanded)

  const truncateStyles: React.CSSProperties = isTruncated
    ? {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: lines,
      }
    : {}

  function toggleTruncate() {
    setIsTruncated(!isTruncated)
  }

  return (
    <div>
      <div style={textStyle} className={textClassName}>
        <p style={truncateStyles}>{children}</p>
      </div>
      <button onClick={toggleTruncate} style={buttonStyle} className={buttonClassName}>
        {isTruncated ? showMoreLabel : showLessLabel}
      </button>
    </div>
  )
}
