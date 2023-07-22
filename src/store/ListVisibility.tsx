import { createStore } from 'hox'
import { useState } from 'react'

export const [Listsvisibility, ListVisibilityProvider] = createStore(()=>{
  const [Opening, setOpening] = useState('block')
  const [Closed, setClosed] = useState('block')
  const [key,setkey] = useState(100)
  const letOpeningUnvisible = (opt:'none'|'block') => {
    setOpening(opt)
  }
  const letClosedUnvisible = (opt:'none'|'block') => {
    setClosed(opt)
  }
  const UpdateKey = () => {
    setkey(key + 1)
  }
  return {
    Opening,
    Closed,
    key,
    UpdateKey,
    letOpeningUnvisible, 
    letClosedUnvisible
  }
})