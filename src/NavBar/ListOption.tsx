import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useState } from 'react'
import { Listsvisibility } from '../store/ListVisibility'

const ListOptions: React.FC<{Close:boolean[],Open:boolean[]}> = (prop) => {
  const ListOption = Listsvisibility()
  const [checkOpening, setCheckOpening] = useState(true)
  const [checkClose, setCheckClose] = useState(true)
  return (
    <div>
      <Checkbox
        checked={checkOpening}
        onChange={(e: CheckboxChangeEvent) => {
          if(prop.Open.length !== 0) prop.Open.pop()
          if (e.target.checked) {
            ListOption.letOpeningUnvisible('block')
            setCheckOpening(true)
            prop.Open.push(true)
          } else {
            ListOption.letOpeningUnvisible('none')
            setCheckOpening(false)
            prop.Open.push(false)
          }
        }}>
        显示已打开列表
      </Checkbox>
      <br />
      <Checkbox
        checked={checkClose}
        onChange={(e: CheckboxChangeEvent) => {
          if(prop.Close.length !== 0) prop.Close.pop()
          if (e.target.checked) {
            ListOption.letClosedUnvisible('block')
            setCheckClose(true)
            prop.Close.push(true)
          } else {
            ListOption.letClosedUnvisible('none')
            setCheckClose(false)
            prop.Close.push(false)
          }
        }}>
        显示已关闭列表
      </Checkbox>
    </div>
  )
}
export default ListOptions
