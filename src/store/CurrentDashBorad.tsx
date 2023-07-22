import { createStore } from 'hox'
import { useState } from 'react'

export const [currentdashboard, CurrentDashboardUpdater] = createStore(() => {
  const [current, setCurrent] = useState('Development')

  const Update = (TitleOrKey: string) => {
    setCurrent(TitleOrKey)
  }

  return {
    current,
    Update,
  }
})
