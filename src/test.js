import React from 'react'
import { shallow } from 'enzyme'
import MyEditor from './'

describe('MyEditor', () => {
  it('renders without crashing', () => {
    shallow(<MyEditor />)
  })
})
