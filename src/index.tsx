import * as React from 'react';

import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

const state = EditorState.create({ schema });
const createView = (element: any) => {
  const view = new EditorView(element, {
    state,
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

export default class Editor extends React.Component {
  ref: React.RefObject<HTMLDivElement | null>;

  constructor(props: any) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    createView(this.ref.current);
  }

  render() {
    return (
      <div style={{border: '1px solid black'}}>
        <div ref={this.ref} />
      </div>
    );
  }
}
