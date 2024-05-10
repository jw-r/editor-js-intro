import 'remirror/styles/all.css'

import {
  EditorComponent,
  Remirror,
  useActive,
  useChainedCommands,
  useCommands,
  useHelpers,
  useKeymap,
  useRemirror,
} from '@remirror/react'
import { BoldExtension, CalloutExtension, ItalicExtension } from 'remirror/extensions'
import { useCallback } from 'react'
import { KeyBindingCommandFunction } from 'remirror'

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

const hooks = [
  () => {
    const { getJSON } = useHelpers()

    const handleSaveShortcut: KeyBindingCommandFunction = useCallback(
      ({ state }) => {
        console.log(`Save to backend: ${JSON.stringify(getJSON(state))}`)

        return true
      },
      [getJSON]
    )

    useKeymap('Mod-s', handleSaveShortcut)
  },
]

export default function MyEditor() {
  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new CalloutExtension({ defaultType: 'warn' }),
    ],

    content: '<p>I love <b>Remirror</b></p>',

    selection: 'start',

    stringHandler: 'html',
  })

  return (
    <div className="remirror-theme">
      <Remirror manager={manager} initialContent={state} hooks={hooks}>
        <EditorComponent />
        <Menu />
      </Remirror>
    </div>
  )
}

const Menu = () => {
  const { toggleBold, focus } = useCommands()

  return (
    <button
      onClick={() => {
        toggleBold()
        focus()
      }}
      disabled={toggleBold.enabled() === false}
    >
      B
    </button>
  )
}
