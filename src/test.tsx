import * as React from 'react'
import { shallow } from 'enzyme'
import MyEditor from './'
import { EditorState } from 'prosemirror-state'

describe('MyEditor', () => {
  it('renders without crashing', () => {
    shallow(<MyEditor
      editorState={new EditorState()}
      onChange={(editorState: EditorState) => {editorState}}
    />)
  })
})
