import { createStore } from 'hox'
import { useState } from 'react'

export const [blockStore, BlockStoreProvider] = createStore(() => {
  const [blockList, setBlockList] = useState<
    { name: string; id: number; belongsto: number }[]
  >([])

  const Addlist = (thing: { name: string; id: number; belongsto: number }) => {
    setBlockList([...blockList, thing])
    console.log(blockList)
  }
  const Delete = (name: string) => {
    setBlockList(blockList.filter((item) => item.name !== name))
  }
  const Swap = (NumberOf_1: number, NumberOf_2: number) => {
    let templist = blockList
    if (templist.length < 2) return
    let temp = templist.filter((item) => item.id === NumberOf_1)[0]
    let temp1index = templist.findIndex((item) => item.id === NumberOf_1),
      temp2index = templist.findIndex((item) => item.id === NumberOf_2)
    templist.splice(
      temp1index,
      1,
      templist.filter((item) => item.id === NumberOf_2)[0]
    )
    templist.splice(temp2index, 1, temp)
    setBlockList(templist)
  }

  return {
    blockList,
    Addlist,
    Delete,
    Swap,
  }
})
