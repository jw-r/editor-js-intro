'use client'

import { useRef } from 'react'

export default function ContentEditableEditor() {
  const textAreaRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-full bg-slate-50" ref={textAreaRef}>
      <div contentEditable className="before:content-[asd]" data-is-empty-and-focused="true"></div>
    </div>
  )
}
