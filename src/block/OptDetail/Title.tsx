import { Button, Input } from 'antd'
import { useEffect, useState } from 'react'
import { blockStore } from '../../store/BlockStore'

const Title: React.FC<{ Name: string; id: number }> = (props) => {
  const blockstore = blockStore()
  const [CanIModify, setCanIModify] = useState(false)
  const [textval, setTextval] = useState(props.Name)
  const handleSubmit = () => {
    blockstore.Edit(props.id, textval)

    setCanIModify(false)
  }
  const handleCancel = () => {
    setCanIModify(false)
  }
  return (
    <div>
      {CanIModify && (
        <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
          <Input value={textval} onChange={(e) => setTextval(e.target.value)} />
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: '10px 0',
            }}>
            <Button type="primary" size="small" onClick={handleSubmit}>
              保存更改
            </Button>
            <Button size="small" onClick={handleCancel}>
              取消
            </Button>
          </div>
        </div>
      )}
      {!CanIModify && (
        <>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
            }}>
            <span>{props.Name}</span>

            <Button
              type="text"
              size="small"
              onClick={() => setCanIModify(true)}>
              编辑
            </Button>
          </div>
          <div>
            <span style={{ color: 'gray' }}>
              where?/who?/what?/basic#{props.id}
            </span>
          </div>
        </>
      )}
    </div>
  )
}
export default Title
