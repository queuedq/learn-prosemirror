import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'

// Copied and modified from:
// https://discuss.prosemirror.net/t/using-with-react/904

export default class ProseMirror extends Component {
  static propTypes = {
    /**
     * EditorState instance to use.
     */
    editorState: PropTypes.instanceOf(EditorState).isRequired,

    /**
     * Called when EditorView produces new EditorState.
     */
    onEditorState: PropTypes.func.isRequired
  };

  _createEditorView = (element) => {
    if (element != null) {
      this._editorView = new EditorView(element, {
        state: this.props.editorState,
        dispatchTransaction: this.dispatchTransaction
      })
    }
  };

  dispatchTransaction = (tx) => {
    // In case EditorView makes any modification to a state we funnel those
    // modifications up to the parent and apply to the EditorView itself.
    const editorState = this.props.editorState.apply(tx)
    if (this._editorView != null) {
      this._editorView.updateState(editorState)
    }
    this.props.onEditorState(editorState)
  };

  focus() {
    if (this._editorView) {
      this._editorView.focus()
    }
  }

  componentWillReceiveProps(nextProps) {
    // In case we receive new EditorState through props — we apply it to the
    // EditorView instance.
    if (this._editorView) {
      if (nextProps.editorState !== this.props.editorState) {
        this._editorView.updateState(nextProps.editorState)
      }
    }
  }

  componentWillUnmount() {
    if (this._editorView) {
      this._editorView.destroy()
    }
  }

  shouldComponentUpdate() {
    // Note that EditorView manages its DOM itself so we'd ratrher don't mess
    // with it.
    return false
  }

  render() {
    // Render just an empty div which is then used as a container for an
    // EditorView instance.
    return <div ref={this._createEditorView} />
  }
}