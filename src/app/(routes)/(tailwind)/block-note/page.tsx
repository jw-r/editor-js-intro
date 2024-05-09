import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/block-note-editor'), {
  ssr: false,
})

export default function BlockNote() {
  return (
    <div className="h-full">
      <Editor />
    </div>
  )
}
