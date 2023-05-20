import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import TextExpander from '../src/TextExpander'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <TextExpander limit={10} showMore='Show more' showLess='Show less'>
        This is the text to test my component
      </TextExpander>,
    )
  })
})
