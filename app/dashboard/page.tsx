"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { useAppContext } from '@/contexts/AppContext'

export default function Dashboard() {
  const { registrations, activities, cancelRegistration } = useAppContext()
  const { toast } = useToast()

  const handleCancel = (id: number) => {
    cancelRegistration(id)
    toast({
      title: "取消報名成功",
      description: "您已成功取消活動報名",
    })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">我的報名</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {registrations.map((registration) => {
          const activity = activities.find(a => a.id === registration.activityId)
          return (
            <Card key={registration.id}>
              <CardHeader>
                <CardTitle>{activity?.title}</CardTitle>
                <CardDescription>{activity?.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>地點: {activity?.location}</p>
                <p>學號: {registration.studentId}</p>
                <p>系級: {registration.department}</p>
                <p>姓名: {registration.name}</p>
              </CardContent>
              <CardFooter>
                <Button variant="destructive" onClick={() => handleCancel(registration.id)}>取消報名</Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      {registrations.length === 0 && (
        <p className="text-center text-gray-500 mt-4">您還沒有報名任何活動</p>
      )}
      <div className="mt-8">
        <Link href="/" passHref>
          <Button variant="outline">返回活動列表</Button>
        </Link>
      </div>
    </div>
  )
}

