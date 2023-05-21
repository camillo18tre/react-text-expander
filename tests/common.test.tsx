import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import TextExpander from '../src/components/TextExpander'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <TextExpander
        lines={10}
        showMoreLabel='Show more...'
        showLessLabel='Show less...'
        textClassName='text-red-500'
        buttonClassName='bg-red-500'
      >
        This is the child text to test my component
      </TextExpander>,
    )
  })
})
