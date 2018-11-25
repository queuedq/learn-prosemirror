import * as React from 'react';
import { shallow } from 'enzyme';
import ProseMirror from './ProseMirror';
import { EditorState } from 'prosemirror-state';

describe('ProseMirror', () => {
  it('renders without crashing', () => {
    shallow(
      <ProseMirror
        editorState={new EditorState()}
        onChange={(editorState: EditorState) => { return; }}
      />,
    );
  });
});
