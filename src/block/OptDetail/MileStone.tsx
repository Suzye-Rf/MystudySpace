import { DownCircleOutlined } from '@ant-design/icons'
import { Button, Popover } from 'antd'
import { useState } from 'react'

const Milestone: React.FC = () => {
  const [modify, setModify] = useState(false)
  // 目前进度到这了
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>里程碑</strong>
        </span>
        <Button
          type="text"
          size="small"
          onClick={() => {
            modify ? setModify(false) : setModify(true)
          }}>
          编辑
        </Button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        {!modify && <span style={{ color: 'gray' }}>无</span>}
        {modify && (
          <Popover open title={'分配 里程碑'} arrow={false} placement='bottom'>
            <Button
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onClick={() => {
                setModify(false)
              }}>
              <span>里程碑</span>
              <DownCircleOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </div>
  )
}
export default Milestone
