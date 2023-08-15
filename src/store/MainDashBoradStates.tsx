import { createStore } from 'hox'
import { useState } from 'react'

export const [usedDashBoardStore, DashBoardStoreProvider] = createStore(() => {
  const [DashBoards, setDashBoards] = useState([{title:'Development',key:'development'}])
  const addDashBoard = (DashBoard:{title:string,key:string} ) => {
    setDashBoards((shit) => [...shit, DashBoard])
  }

  const removeDashBoard = (DashBoard: {title:string,key:string}) => {
    setDashBoards((shit) => shit.filter((that) => that !== DashBoard))
  }

  return {
    DashBoards,
    addDashBoard,
    removeDashBoard,
  }
})

