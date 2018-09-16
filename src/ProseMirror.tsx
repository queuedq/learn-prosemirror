import * as React from 'react';
import { EditorState, Transaction } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

// Copied and modified from:
// https://discuss.prosemirror.net/t/using-with-react/904

export interface Props {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
}

export default class ProseMirror extends React.Component {
  props: Props;
  editorView?: EditorView;

  createEditorView = (element: HTMLDivElement | null) => {
    if (element != null) {
      this.editorView = new EditorView(element, {
        state: this.props.editorState,
        dispatchTransaction: this.dispatchTransaction,
      });
    }
  }

  dispatchTransaction = (tx: Transaction) => {
    // In case EditorView makes any modification to a state we funnel those
    // modifications up to the parent and apply to the EditorView itself.
    const editorState = this.props.editorState.apply(tx);
    if (this.editorView != null) {
      this.editorView.updateState(editorState);
    }
    this.props.onChange(editorState);
  }

  componentWillReceiveProps(nextProps: Props) {
    // In case we receive new EditorState through props — we apply it to the
    // EditorView instance.
    if (this.editorView) {
      if (nextProps.editorState !== this.props.editorState) {
        this.editorView.updateState(nextProps.editorState);
      }
    }
  }

  componentWillUnmount() {
    if (this.editorView) {
      this.editorView.destroy();
    }
  }

  shouldComponentUpdate() {
    // Note that EditorView manages its DOM itself so we'd ratrher don't mess
    // with it.
    return false;
  }

  render() {
    // Render just an empty div which is then used as a container for an
    // EditorView instance.
    return <div ref={this.createEditorView} />;
  }
}
