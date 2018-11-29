import * as React from 'react';

import { EditorState } from 'prosemirror-state';

import MyEditor, { schema } from '../src';

export default class App extends React.Component {
  state: {
    editorState: EditorState;
  };

  constructor(props: {}) {
    super(props);

    this.state = {
      editorState: EditorState.create({ schema }),
    };
  }

  onChange = (editorState: EditorState) => {
    this.setState({editorState});
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <MyEditor
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
