"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteSchema, defaultBlockSpecs } from "@blocknote/core";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

const initialContent = [
  {
    type: "heading",
    content: "문서 제목",
  },
  {
    type: "paragraph",
  },
  {
    type: "paragraph",
    content: "/ 입력하면 다양한 것 테스트할 수 있음",
  },
  {
    type: "paragraph",
    content: "입력한 글자를 드레그해도 tool 확인 가능",
  },
  {
    type: "paragraph",
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Blocks:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: "Paragraph",
  },
  {
    type: "bulletListItem",
    content: "Bullet List Item",
  },
  {
    type: "numberedListItem",
    content: "Numbered List Item",
  },
  {
    type: "table",
    content: {
      type: "tableContent",
      rows: [
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
        {
          cells: ["Table Cell", "Table Cell", "Table Cell"],
        },
      ],
    },
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: "Inline Content:",
        styles: { bold: true },
      },
    ],
  },
  {
    type: "paragraph",
    content: [
      {
        type: "text",
        text: " ",
        styles: {},
      },
      {
        type: "link",
        content: "픽토스 바로가기",
        href: "https://www.picktoss.com/",
      },
    ],
  },
] as any;

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    // procode: CodeBlock as any,
  },
});

export default function Editor() {
  const editor = useCreateBlockNote({
    schema,
    initialContent,
  });

  return <BlockNoteView editor={editor} theme="light" />;
}
