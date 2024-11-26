"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppContext } from '@/contexts/AppContext'

export default function Home() {
  const { activities } = useAppContext()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">活動列表</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle>{activity.title}</CardTitle>
              <CardDescription>{activity.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>地點: {activity.location}</p>
              <p>{activity.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/activities/${activity.id}`} passHref>
                <Button>查看詳情</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

