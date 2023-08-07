import { DownCircleOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Popover } from 'antd'

import { useState } from 'react'

const ShitPoem: React.FC = () => {
  const [modify, setModify] = useState(false)
  const [text, setText] = useState('无')
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>史诗</strong>
        </span>
        <Button
          type="text"
          size="small"
          onClick={() => {
            if (modify) {
              setModify(false)
            } else {
              setModify(true)
            }
          }}>
          编辑
        </Button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        {!modify &&
          (text === '无' ? (
            <span style={{ color: 'gray' }}>无</span>
          ) : (
            <strong>
              <a style={{ color: 'black' }}>{text}</a>
            </strong>
          ))}
        {modify && (
          <Popover
            title={'选择 史诗'}
            trigger={'click'}
            open
            arrow={false}
            content={
              <>
                <Divider style={{ margin: '10px 0' }} />
                <Input
                  type="text"
                  placeholder="Search..."
                  prefix={<SearchOutlined />}
                />
                <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Button
                    style={{ textAlign: 'left' }}
                    type="text"
                    onClick={() => {
                      setText('无')
                      setModify(false)
                    }}>
                    史诗
                  </Button>
                  <Divider style={{ margin: '15px 0' }} />
                  <Button
                    type="text"
                    style={{
                      height: '80px',
                      width: '250px',
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      setText(
                        '作为【管理员】，我可以【管理关卡】，以便【学生能够有序完成指定任务】。'
                      )
                      setModify(false)
                    }}>
                    <div style={{ whiteSpace: 'normal', textAlign: 'left' }}>
                      作为【管理员】，我可以【管理关卡】，
                      以便【学生能够有序完成指定任务】。
                    </div>
                  </Button>
                  <Button
                    type="text"
                    style={{ textAlign: 'left' }}
                    onClick={() => {
                      setText('早期版本的功能补全和纠错')
                      setModify(false)
                    }}>
                    早期版本的功能补全和纠错
                  </Button>
                </div>
              </>
            }>
            <Button
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <span>史诗</span>
              <DownCircleOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </div>
  )
}
export default ShitPoem
