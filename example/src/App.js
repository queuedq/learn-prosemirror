import React, { Component } from 'react'

import { EditorState } from 'prosemirror-state'
import { schema } from 'prosemirror-schema-basic'

import MyEditor from 'learn-prosemirror'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.create({
        schema: schema
      })
    }
  }

  onEditorState = (editorState) => {
    this.setState({editorState})
  };

  render () {
    const {editorState} = this.state
    return (
      <div>
        <MyEditor
          editorState={editorState}
          onEditorState={this.onEditorState}
        />
      </div>
    )
  }
}
