import * as React from 'react'
import { shallow } from 'enzyme'
import ProseMirror from './ProseMirror'

describe('ProseMirror', () => {
  it('renders without crashing', () => {
    shallow(<ProseMirror />)
  })
})
