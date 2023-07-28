import { createStore } from "hox";
import { useState } from "react";

export const [useListStore, StoreListProvider] = createStore(()=>{
  
  const [lists,setLists] = useState<{
    selfid:number
    belongsTo: number,
    title: string,
    form:string,
    tag:JSX.Element,
    data1: number,
    data2: number,
    plusActivated: boolean,
    optionActivated: boolean,
    Display:string
  }[]>(new Array<{
    selfid:number,
    belongsTo: number,
    title: string,
    form:string,
    tag:JSX.Element,
    data1: number,
    data2: number,
    plusActivated: boolean,
    optionActivated: boolean,
    Display:string
  }>())

  const AddThing = (thing:{
    selfid:number
    belongsTo: number,
    title: string,
    form:string,
    tag:JSX.Element,
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
    DeleteThing,
    
  }
})