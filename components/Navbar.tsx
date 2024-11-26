import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Notifications from './Notifications'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          活動報名系統
        </Link>
        <div className="space-x-4 flex items-center">
          <Link href="/" passHref>
            <Button variant="ghost">活動列表</Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button variant="ghost">我的報名</Button>
          </Link>
          <Link href="/create-activity" passHref>
            <Button variant="ghost">創建活動</Button>
          </Link>
          <Notifications />
          <Link href="/auth" passHref>
            <Button variant="outline">登入/註冊</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

