import * as React from 'react';

import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

interface Props {
  state: EditorState;
}

export default class Editor extends React.Component<Props> {
  ref: React.RefObject<HTMLDivElement | null>;
  view: EditorView;

  createView = (element: any) => {
    console.log(this.props.state);
    this.view = new EditorView(element, {
      state: this.props.state,
      dispatchTransaction: this.dispatchTransaction,
    });
  }

  dispatchTransaction = (transaction: any) => {
    console.log(transaction);
    console.log(
      'Document size went from', transaction.before.content.size,
      'to', transaction.doc.content.size,
    );
    const newState = this.view.state.apply(transaction);
    this.view.updateState(newState);
  }

  logEditorState = () => {
    console.log(this.view.state.doc.toJSON());
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        <div ref={this.createView} />
        <button type="button" onClick={this.logEditorState}>
          Log editorState
        </button>
      </div>
    );
  }
}
