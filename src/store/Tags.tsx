import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { createStore } from 'hox'
import { useState } from 'react'

export const [Tags, TagsStore] = createStore(() => {
  const [Tag, setTeg] = useState<{ id: number; tags: string[] }[]>([])
  const [Switch, setSwitch] = useState(false)

  const Change = () =>{
    Switch ? setSwitch(false) : setSwitch(true)
  }

  const Add = (id: number, NewTag: string) => {
    let temp = Tag.find((item) => item.id === id) as {
      id: number
      tags: string[]
    }
    if (temp !== undefined) {
      if (!temp.tags.includes(NewTag)) {
        console.log(Tag)
        console.log(temp, NewTag)
        temp.tags.push(NewTag)
      } else Remove(id, NewTag)
    }
  }

  const Remove = (id: number, tag: string) => {
    let temp = Tag.find((item) => item.id === id) as {
      id: number
      tags: string[]
    }
    if (temp !== undefined) {
      temp.tags.splice(
        temp.tags.findIndex((item) => item.includes(tag)),
        1
      )
    }
  }
  return {
    Tag,
    setTeg,
    Add,
    Change,
    Switch
    // Remove,
  }
})
