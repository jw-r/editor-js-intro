'use client'

import dynamic from 'next/dynamic'

// const TutorialEditor = dynamic(() => import('@/components/remirror-editor/tutorial'), {
//   ssr: false,
// })
const RemirrorEditor = dynamic(() => import('@/components/remirror-editor'), {
  ssr: false,
})

export default function Remirror() {
  return (
    <div>
      <RemirrorEditor />
      {/* <TutorialEditor /> */}
    </div>
  )
}
