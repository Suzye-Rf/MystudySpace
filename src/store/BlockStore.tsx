import { createStore } from "hox";
import { BlockList } from "net";
import { useState } from "react";

const [blockStore, BlockStoreProvider] = createStore(()=>{
  const [blockList, setBlockList] = useState([{}])

  const Addlist = (thing:{}) => {
    setBlockList([...blockList,thing])
  }
  
})