import { WysiwygEditor } from '@remirror/react-editors/wysiwyg'

export default function RemirrorEditor() {
  return (
    <div style={{ padding: '16px' }}>
      <WysiwygEditor placeholder="/ 를 입력해보세요." />
    </div>
  )
}
