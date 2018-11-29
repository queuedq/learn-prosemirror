import { EditorState } from 'prosemirror-state';
import { textSchema } from './schema';

export default () => {
  return EditorState.create({
    schema: textSchema,
  });
};
