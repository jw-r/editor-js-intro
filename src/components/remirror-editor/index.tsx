import { OnChangeJSON } from '@remirror/react'
import { WysiwygEditor } from '@remirror/react-editors/wysiwyg'
import { useCallback, useState } from 'react'
import { RemirrorJSON } from 'remirror'

const STORAGE_KEY = 'remirror-editor-content'

export default function RemirrorEditor() {
  const [initialContent] = useState<RemirrorJSON | undefined>(() => {
    const content = localStorage.getItem(STORAGE_KEY)
    return content ? JSON.parse(content) : undefined
  })

  const handleEditorChange = useCallback((json: RemirrorJSON) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(json))
  }, [])

  return (
    <div style={{ padding: '16px' }}>
      <WysiwygEditor
        placeholder="다양한 마크다운 문법을 사용해서 테스트해보세요!"
        initialContent={initialContent}
      >
        <OnChangeJSON onChange={handleEditorChange} />
      </WysiwygEditor>
    </div>
  )
}
