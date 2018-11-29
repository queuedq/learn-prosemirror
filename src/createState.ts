import { EditorState } from 'prosemirror-state';
import { undo, redo, history } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { textSchema } from './schema';

export default () => {
  return EditorState.create({
    schema: textSchema,
    plugins: [
      history(),
      keymap({'Mod-z': undo, 'Mod-Shift-z': redo}),
      keymap(baseKeymap),
    ],
  });
};
