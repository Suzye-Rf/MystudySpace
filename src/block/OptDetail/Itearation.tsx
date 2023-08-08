import { DownCircleOutlined } from '@ant-design/icons'
import { Button, Divider, Popover } from 'antd'
import { useState } from 'react'
const Iterator: React.FC = () => {
  const [modify, setModify] = useState(false)
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>迭代</strong>
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
          <Popover
            title="分配 迭代"
            open
            trigger={'click'}
            arrow={false}
            content={
              <>
                <Divider style={{ margin: '10px 0' }} />
                {/* 目前进度在这 */}
              </>
            }>
            <Button
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <span>迭代</span>
              <DownCircleOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </div>
  )
}
export default Iterator
