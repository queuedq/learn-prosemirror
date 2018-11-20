import * as React from 'react';

import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export default class Editor extends React.Component {
  ref: React.RefObject<HTMLDivElement | null>;
  editorState: EditorState;
  view: EditorView;

  constructor(props: any) {
    super(props);
    this.ref = React.createRef();

    this.editorState = EditorState.create({ schema });
  }

  createView = (element: any) => {
    this.view = new EditorView(element, {
      state: this.editorState,
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

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        <div ref={this.createView} />
      </div>
    );
  }
}
