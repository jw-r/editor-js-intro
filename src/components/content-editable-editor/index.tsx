'use client'

import { useRef, useState } from 'react'
import './styles/content-editable-editor.css'

interface Block {}

export default function ContentEditableEditor() {
  const blocks = useState<any[]>([])
  const textAreaRef = useRef<HTMLDivElement>(null)

  const handleAreaFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
    console.log('handleAreaFocus')

    if (e.target.innerText === '') {
      e.target.setAttribute('data-is-empty-and-focused', 'true')
    }
  }

  const handleAreaBlur: React.FocusEventHandler<HTMLDivElement> = (e) => {
    console.log('handleAreaBlur')

    if (e.target.innerText === '') {
      e.target.removeAttribute('data-is-empty-and-focused')
    }
  }

  const handleAreaInput: React.FormEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement

    if (target.innerText !== '' && target.hasAttribute('data-is-empty-and-focused')) {
      target.removeAttribute('data-is-empty-and-focused')
    } else if (target.innerText === '' && !target.hasAttribute('data-is-empty-and-focused')) {
      target.setAttribute('data-is-empty-and-focused', 'true')
    }
  }

  return (
    <div className="min-h-full bg-slate-50 *:outline-none" ref={textAreaRef}>
      <div
        contentEditable
        onFocus={handleAreaFocus}
        onBlur={handleAreaBlur}
        onInput={handleAreaInput}
      />
    </div>
  )
}
