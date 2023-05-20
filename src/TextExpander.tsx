import React, { useState } from 'react'
import type { TextExpanderType } from './Types'

export default function TextExpander({ children, limit, showMore, showLess }: TextExpanderType) {
  const text = children || ''
  const [isTruncated, setIsTruncated] = useState<boolean>(true)

  const resultString = isTruncated ? text.slice(0, limit) : text

  function toggleTruncate() {
    setIsTruncated(!isTruncated)
  }

  return (
    <div>
      {resultString}
      <p onClick={toggleTruncate} style={{ color: 'blue', cursor: 'pointer' }}>
        {isTruncated ? showMore : showLess}
      </p>
    </div>
  )
}
