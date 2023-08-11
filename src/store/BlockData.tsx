import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { createStore } from 'hox'
import { useState } from 'react'

export const [dataSource, DataProvider] = createStore(() => {
  const [dataState, setDataState] = useState<
    {
      id: number
      data: {
        Assign: CheckboxValueType[]
        ShitPoem: string[]
        MileStone: string[]
        Iteration: JSX.Element[]
        DeadLine: string[]
        Mark:CheckboxValueType[][]
        Weight:string[]
        Private:string[]
      }
    }[]
  >([])
  
    return {
      dataState,
      setDataState
    }

})
