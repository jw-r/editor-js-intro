import { Button } from '@/components/ui/button'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Editor = dynamic(() => import('@/components/block-note-editor'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 items-center *:w-48 gap-8">
        <Link href="/block-note">
          <Button className="w-full">block-note Editor</Button>
        </Link>
        <Link href="/content-editable">
          <Button className="w-full">content-editable Editor</Button>
        </Link>
        <Link href="#">
          <Button className="w-full" disabled>
            prose-mirror Editor
          </Button>
        </Link>
      </div>
    </div>
  )
}
