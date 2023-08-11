import { Button, DatePicker, DatePickerProps } from 'antd'
import { useState } from 'react'
import { dataSource } from '../../store/BlockData'

const DeadLine: React.FC<{ id: number; data: string[] }> = (props) => {
  const db = dataSource()
  let dts: string[] = db.dataState.find((item) => item.id === props.id)?.data
    .DeadLine as string[]
  const [modify, setModify] = useState(false)
  const [dateString, setDateString] = useState(dts[0])
  const onChange: DatePickerProps['onChange'] = (_date, dateString) => {
    setDateString(dateString)
    dts.pop()
    dts.push(dateString)
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
            } else setModify(true)
          }}>
          编辑
        </Button>
      </div>
      <div>
        {modify ? (
          <DatePicker onChange={onChange} placeholder="请选择日期" open />
        ) : dts[0] !== '无' ? (
          <span>{dateString}</span>
        ) : (
          <span style={{ color: 'gray' }}>无</span>
        )}
      </div>
    </div>
  )
}
export default DeadLine
