import * as React from 'react';
import { EditorState } from 'prosemirror-state';

import ProseMirror from './ProseMirror';

import styles from './styles.css';

export interface Props {
  editorState: EditorState;
  onChange: (editorState: EditorState) => void;
}

export default class MyEditor extends React.Component {
  props: Props;

  render() {
    const { editorState, onChange } = this.props;
    return (
      <div className={styles.myEditorWrapper} >
        <ProseMirror
          editorState={editorState}
          onChange={onChange}
        />
      </div>
    );
  }
}
