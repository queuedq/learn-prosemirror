import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { EditorState } from 'prosemirror-state'

import ProseMirror from './ProseMirror'

export default class MyEditor extends Component {
  static propTypes = {
    editorState: PropTypes.instanceOf(EditorState).isRequired,
    onEditorState: PropTypes.func.isRequired
  }

  render() {
    const {editorState, onEditorState} = this.props
    return (
      <div>
        <ProseMirror
          ref={this.onEditorView}
          editorState={editorState}
          onEditorState={onEditorState}
        />
      </div>
    )
  }
}
