import { Button, Input } from 'antd'
import {  useState } from 'react'
import { blockStore } from '../store/BlockStore'


const NewBlock: React.FC<{
  belongsTo: number
  Cansee: string
  action: {
    todo: React.Dispatch<React.SetStateAction<string>>
    setstat: React.Dispatch<React.SetStateAction<boolean>>
    setshow: React.Dispatch<React.SetStateAction<boolean>>
  }
}> = (props) => {
  const block = blockStore()
  const [value, setValue] = useState('')
  const [createDisabled, setDisabled] = useState(true)
  const handleConfirm = () => {
    //这里提交新建议题
    block.Addlist({
      name: value,
      id: block.blockList.length + 1,
      belongsto: props.belongsTo,
    })
    //让新建框消失
    props.action.todo('none')
    props.action.setstat(false)
    props.action.setshow(false)
    setDisabled(true)
    setValue('')
    
  }
  
  
  return (
    <>
      <div
        style={{
          margin: '10px',
          width: '95%',
          backgroundColor: '#FFFFFF',
          borderRadius: '5px',
          display: props.Cansee,
        }}>
        <div style={{ padding: '10px' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>标题</h3>
          <Input
            value={value}
            onChange={(text) => {
              setValue(text.target.value)
              if (text.target.value.length === 0) setDisabled(true)
              else setDisabled(false)
            }}></Input>
          <span
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0 0 0',
            }}>
            <Button
              type="primary"
              disabled={createDisabled}
              onClick={handleConfirm}>
              创建议题
            </Button>
            <Button
              onClick={() => {
                props.action.todo('none')
                props.action.setstat(false)
                props.action.setshow(false)
                setDisabled(true)
                setValue('')
              }}>
              取消
            </Button>
          </span>
        </div>
      </div>
    </>
  )
}
export default NewBlock
