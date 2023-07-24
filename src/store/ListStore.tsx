import { createStore } from "hox";
import { useState } from "react";

export const [useListStore, StoreListProvider] = createStore(()=>{
  const [lists,setLists] = useState([{}])

  const AddThing = (thing:{}) => {
    setLists([...lists,thing])
  }
  const DeleteThing = () => {
  }

  return {
    lists,
    AddThing,
    DeleteThing
  }
})