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

    let temp1 = templist[NumberOf_1]
    let temp2 = templist[NumberOf_2]

    templist.splice(NumberOf_1, 1, temp2)

    console.log('完成第一次数据变换,数据为:' + templist)

    templist.splice(NumberOf_2, 1, temp1)

    console.log('完成第二次数据变换,数据为:' + templist)

    // let temp = templist.filter((item) => item.id === NumberOf_1+1)[0]
    // let temp1index = templist.findIndex((item) => item.id === NumberOf_1+1),
    //   temp2index = templist.findIndex((item) => item.id === NumberOf_2+1)

    // templist.splice(
    //   temp1index,
    //   1,
    //   templist.filter((item) => item.id === NumberOf_2+1)[0]
    // )
    // templist.splice(temp2index, 1, temp)
    setBlockList(templist)
  }
  const Switch = (sourceID:number,destinationID:number,indexS:number,indexD:number,nameofDrag:String) =>{
    console.log('来自List',sourceID,'的第',indexS,'个元素,需要转移到List',destinationID,'的第',indexD,'个位置上')
    console.log('你执行了吗？')
    let templist = blockList
    let temp1 = templist.filter((item) => item.name === nameofDrag)[0]
    templist = templist.filter((item) => item.name !== nameofDrag)
    let templ = templist.filter((item) => item.belongsto === destinationID)
    templist = templist.filter((item) => item.belongsto !== destinationID)
    temp1.belongsto = destinationID
    templ.splice(indexD,0,temp1)
    templist = templist.concat(templ)
    console.log('完成。',templist)
    setBlockList(templist)
  }

  return {
    blockList,
    Addlist,
    Delete,
    Swap,
    Switch
  }
})
