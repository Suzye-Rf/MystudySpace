import { createStore } from 'hox'
import { useState } from 'react'
import { fuckingStore } from './Dashboards'

export const [currentdashboard, CurrentDashboardUpdater] = createStore(() => {
  const dash = fuckingStore()
  const [current, setCurrent] = useState(dash.DashBoards[0].Name[0])

  const Update = (TitleOrKey: string) => {
    setCurrent(TitleOrKey)
  }

  return {
    current,
    Update,
  }
})
