import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useState } from 'react'
import { Listsvisibility } from '../store/ListVisibility'

const ListOptions: React.FC = () => {
  const ListOption = Listsvisibility()
  const [checkOpening, setCheckOpening] = useState(true)
  const [checkClose, setCheckClose] = useState(true)
  return (
    <div>
      <Checkbox
        checked={checkOpening}
        onChange={(e: CheckboxChangeEvent) => {
          if (e.target.checked) {
            ListOption.letOpeningUnvisible('block')
            setCheckOpening(true)
          } else {
            ListOption.letOpeningUnvisible('none')
            setCheckOpening(false)
          }
        }}>
        显示已打开列表
      </Checkbox>
      <br />
      <Checkbox
        checked={checkClose}
        onChange={(e: CheckboxChangeEvent) => {
          if (e.target.checked) {
            ListOption.letClosedUnvisible('block')
            setCheckClose(true)
          } else {
            ListOption.letClosedUnvisible('none')
            setCheckClose(false)
          }
        }}>
        显示已关闭列表
      </Checkbox>
    </div>
  )
}
export default ListOptions
