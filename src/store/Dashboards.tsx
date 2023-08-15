import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { createStore } from 'hox'
import { useState } from 'react'

export const [fuckingStore, FuckingStorePros] = createStore(() => {
  const [DashBoards, setDashBoards] = useState<
    {
      Name: string[]
      ShowOpen: boolean[]
      ShowClose: boolean[]
      props: {
        Milestone: string[]
        Iteration: JSX.Element[]
        Marks: CheckboxValueType[][]
        Assigner: JSX.Element[]
        Weight: JSX.Element[]
      }
    }[]
  >([
    {
      Name: ['Development'],
      ShowOpen: [true],
      ShowClose: [true],
      props: {
        Milestone: ['任何里程碑'],
        Iteration: [<p style={{ color: 'gray', margin: 2 }}>任何迭代</p>],
        Marks: [['任何标记']],
        Assigner: [<p style={{ color: 'gray', margin: 2 }}>任何指派人</p>],
        Weight: [<p style={{ color: 'gray', margin: 2 }}>Any weight</p>],
      },
    },
  ])

  const ADD = (
    Name: string[],
    Open: boolean[],
    Close: boolean[],
    props: {
      Milestone: string[]
      Iteration: JSX.Element[]
      Marks: CheckboxValueType[][]
      Assigner: JSX.Element[]
      Weight: JSX.Element[]
    }
  ) => {
    setDashBoards([
      ...DashBoards,
      { Name: Name, ShowOpen: Open, ShowClose: Close, props: props },
    ])
  }

  const MODIFY = (Name: string[], prop: string, newState: any) => {
    let temp = DashBoards.find((item) => item.Name[0] === Name[0])
    switch (prop) {
      case 'Milestone': {
        temp?.props.Milestone.pop()
        temp?.props.Milestone.push(newState)
        break
      }
      case 'Iteration': {
        temp?.props.Iteration.pop()
        temp?.props.Iteration.push(newState)
        break
      }
      case 'Marks': {
        temp?.props.Marks.pop()
        temp?.props.Marks.push(newState)
        break
      }
      case 'Assinger': {
        temp?.props.Assigner.pop()
        temp?.props.Assigner.push(newState)
        break
      }
      case 'Weight': {
        temp?.props.Weight.pop()
        temp?.props.Weight.push(newState)
        break
      }
    }
  }

  const DELETE = (Name: string[]) => {
    let temp = DashBoards
    temp.splice(
      temp.findIndex((item) => item.Name[0] === Name[0]),
      1
    )
  }

  return {
    DashBoards,
    ADD,
    MODIFY,
    DELETE,
  }
})
