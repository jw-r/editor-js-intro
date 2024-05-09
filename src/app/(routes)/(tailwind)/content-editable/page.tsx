import dynamic from 'next/dynamic'

const ContentEditableEditor = dynamic(() => import('@/components/content-editable-editor'), {
  ssr: false,
})

export default function ContentEditable() {
  return (
    <div className="h-full container">
      <ContentEditableEditor />
    </div>
  )
}
