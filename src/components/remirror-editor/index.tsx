import { useRemirror } from '@remirror/react'
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions'

// const remirrorJsonFormStorage = {
//   type: 'doc',
//   content: [
//     { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Hello world' }] },
//     {
//       type: 'paragraph',
//       content: [
//         { type: 'text', text: 'Hello' },
//         { type: 'text', marks: [{ type: 'italic' }], text: 'word' },
//       ],
//     },
//   ],
// }

export default function MyEditor() {
  const { manager } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new CalloutExtension({ defaultType: 'warn' }),
    ],

    content: '<p>I love <b>Remirror</b></p>',

    selection: 'start',

    stringHandler: 'html',
  })

  return <div>myeditor</div>
}
