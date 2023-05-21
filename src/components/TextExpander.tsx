import React, { useState } from 'react'
import type { TextExpanderType } from '../types/Types'

export default function TextExpander({
  children,
  lines,
  showLessLabel,
  showMoreLabel,
  textClassName,
  textStyle,
  buttonClassName,
  buttonStyle,
}: TextExpanderType) {
  const [isTruncated, setIsTruncated] = useState(true)

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
