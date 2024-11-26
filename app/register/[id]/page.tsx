"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register({ params }: { params: { id: string } }) {
  const [studentId, setStudentId] = useState('')
  const [department, setDepartment] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 在實際應用中,這裡應該發送數據到服務器
    console.log('Registered:', { activityId: params.id, studentId, department, name })
    // 模擬註冊成功
    alert('報名成功!')
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>活動報名</CardTitle>
          <CardDescription>請填寫以下信息完成報名</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="studentId">學號</Label>
                <Input id="studentId" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="department">系級</Label>
                <Input id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">姓名</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" onClick={handleSubmit}>提交報名</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

