import React, { Component } from 'react'

import { EditorState } from 'prosemirror-state'

import { MyEditor, schema } from 'learn-prosemirror'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: EditorState.create({ schema }),
    };
  }

  onChange = (editorState) => {
    this.setState({editorState})
  };

  render () {
    const {editorState} = this.state;
    return (
      <div>
        <MyEditor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
