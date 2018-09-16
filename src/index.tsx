import * as React from 'react'
import { EditorState } from 'prosemirror-state'

import ProseMirror from './ProseMirror'

export interface Props {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
}

export default class MyEditor extends React.Component {
  props: Props;

  render() {
    const { editorState, onChange } = this.props
    return (
      <div>
        <ProseMirror
          editorState={editorState}
          onChange={onChange}
        />
      </div>
    )
  }
}
