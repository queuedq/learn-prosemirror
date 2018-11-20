import * as React from 'react';

import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

export default class Editor extends React.Component {
  ref: React.RefObject<HTMLDivElement | null>;
  editorState: EditorState;

  constructor(props: any) {
    super(props);
    this.ref = React.createRef();

    this.editorState = EditorState.create({ schema });
  }

  createView = (element: any) => {
    const view = new EditorView(element, {
      state: this.editorState,
      dispatchTransaction(transaction: any) {
        console.log(transaction);
        console.log(
          'Document size went from', transaction.before.content.size,
          'to', transaction.doc.content.size,
        );
        const newState = view.state.apply(transaction);
        view.updateState(newState);
      },
    });
    return view;
  };

  componentDidMount() {
    this.createView(this.ref.current);
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        <div ref={this.ref} />
      </div>
    );
  }
}
