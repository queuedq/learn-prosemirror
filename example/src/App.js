import React, { Component } from 'react'

import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { DOMParser } from 'prosemirror-model';
import Editor from 'learn-prosemirror'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = EditorState.create({
      schema,
      doc: DOMParser.fromSchema(schema).parse(document.getElementById('content')),
      // doc: schema.nodeFromJSON({
      //   type: 'doc',
      //   content: [
      //     {
      //       type: 'paragraph',
      //       content: [{ type: 'text', text: 'asdf' }]
      //     }
      //   ]
      // }),
    });
  }

  render () {
    return (
      <div>
        <Editor state={this.state} />
      </div>
    )
  }
}
