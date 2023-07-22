import { createStore } from "hox";
import { useState } from "react";

export const [newliststats, NewliststatsProvider] = createStore(() => {
  const [newlistvisible, setNewlistvisible] = useState('none')
  const [key,setkey] = useState(10)
  const [button,setbutton] = useState(false)
  const [notion,setnotion] = useState('')
  const updateNotion = () => {
    if(notion == '') setnotion('列表创建向导已打开')
    else setnotion('')
  }
  const updateBtn = () => {
    if(button) setbutton(false)
    else setbutton(true)
  }
  const updateState = (state: string) => {
      setNewlistvisible(state)
      setkey(key+1)
  }
  return {
    newlistvisible,
    updateState,
    key,
    button,
    updateBtn,
    notion,
    updateNotion
  }
})
