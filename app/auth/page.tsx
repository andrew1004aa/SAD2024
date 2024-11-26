"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 這裡應該實現實際的登入/註冊邏輯
    toast({
      title: isLogin ? "登入成功" :
"註冊成功",
      description: "歡迎使用活動報名系統",
    })
  }

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>{isLogin ? "登入" : "註冊"}</CardTitle>
        <CardDescription>歡迎使用活動報名系統</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="login" onValueChange={(value) => setIsLogin(value === "login")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">登入</TabsTrigger>
            <TabsTrigger value="register">註冊</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">密碼</Label>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">姓名</Label>
                  <Input id="name" placeholder="張三" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">電子郵件</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">密碼</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirm-password">確認密碼</Label>
                  <Input id="confirm-password" type="password" required />
                </div>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>{isLogin ? "登入" : "註冊"}</Button>
      </CardFooter>
    </Card>
  )
}

