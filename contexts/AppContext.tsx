"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Activity = {
  id: number
  title: string
  date: string
  location: string
  description: string
}

type Registration = {
  id: number
  activityId: number
  studentId: string
  department: string
  name: string
}

type AppContextType = {
  activities: Activity[]
  addActivity: (activity: Omit<Activity, 'id'>) => void
  registrations: Registration[]
  addRegistration: (registration: Omit<Registration, 'id'>) => void
  cancelRegistration: (id: number) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, title: "夏季烤肉派對", date: "2023-07-15", location: "陽明山國家公園", description: "享受夏日陽光與美食" },
    { id: 2, title: "秋季登山活動", date: "2023-09-20", location: "玉山國家公園", description: "欣賞秋季楓紅美景" },
    { id: 3, title: "冬季滑雪之旅", date: "2023-12-10", location: "北海道", description: "體驗滑雪的刺激與樂趣" },
  ])
  const [registrations, setRegistrations] = useState<Registration[]>([])

  const addActivity = (activity: Omit<Activity, 'id'>) => {
    setActivities(prev => [...prev, { ...activity, id: prev.length + 1 }])
  }

  const addRegistration = (registration: Omit<Registration, 'id'>) => {
    setRegistrations(prev => [...prev, { ...registration, id: prev.length + 1 }])
  }

  const cancelRegistration = (id: number) => {
    setRegistrations(prev => prev.filter(reg => reg.id !== id))
  }

  return (
    <AppContext.Provider value={{ activities, addActivity, registrations, addRegistration, cancelRegistration }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

