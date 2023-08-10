import { Button, DatePicker, DatePickerProps } from 'antd'
import { useState } from 'react'

const DeadLine: React.FC = () => {
  const [modify, setModify] = useState(false)
  const [checked, setChecked] = useState(false)
  const [dateString, setDateString] = useState('')
  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setChecked(true)
    setDateString(dateString)
    setModify(false)
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>截止日期</strong>
        </span>
        <Button
          type="text"
          size="small"
          onClick={() => {
            if (modify) {
              setModify(false)
              setChecked(false)
            } else setModify(true)
          }}>
          编辑
        </Button>
      </div>
      <div>
        {modify ? (
          <DatePicker onChange={onChange} placeholder="请选择日期" open />
        ) : checked ? (
          <span>{dateString}</span>
        ) : (
          <span style={{ color: 'gray' }}>无</span>
        )}
      </div>
    </div>
  )
}
export default DeadLine
