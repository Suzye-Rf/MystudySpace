import { createStore } from "hox";
import { useState } from "react";

export const [useListStore, StoreListProvider] = createStore(()=>{
  const [lists,setLists] = useState([{
    title: '',
    data1: 0,
    data2: 0,
    plusActivated: false,
    optionActivated: false,
    Display:'none'
  }])

  const AddThing = (thing:{
    title: string,
    data1: number,
    data2: number,
    plusActivated: boolean,
    optionActivated: boolean,
    Display:string
  }) => {
    setLists([...lists,thing])
    
  }
  const DeleteThing = (thingTItle:string) => {
    setLists(lists.filter((item) => item.title !== thingTItle))
    
  }

  return {
    lists,
    AddThing,
    DeleteThing
  }
})