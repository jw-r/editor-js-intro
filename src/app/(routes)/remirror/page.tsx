'use client'

import dynamic from 'next/dynamic'

const RemirrorEditor = dynamic(() => import('@/components/remirror-editor'), {
  ssr: false,
})

export default function Remirror() {
  return (
    <div>
      <RemirrorEditor />
    </div>
  )
}
