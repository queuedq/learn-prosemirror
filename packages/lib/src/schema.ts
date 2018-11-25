import {Schema} from 'prosemirror-model';

const textSchema = new Schema({
  nodes: {
    text: {},
    doc: {content: 'text*'},
  },
});

export { textSchema as schema };
