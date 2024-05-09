import { WysiwygEditor } from '@remirror/react-editors/wysiwyg'

export default function RemirrorEditor() {
  return (
    <div style={{ padding: '16px' }}>
      <WysiwygEditor placeholder="다양한 마크다운 문법을 사용해서 테스트해보세요!" />
    </div>
  )
}
