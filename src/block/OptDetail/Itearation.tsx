import {
  CloseOutlined,
  DownCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Divider, Input, Popover } from 'antd'
import { useState } from 'react'
import data from '../../data/Data.json'

const Iterator: React.FC = () => {
  const [modify, setModify] = useState(false)
  const [content, setContent] = useState(
    <span style={{ color: 'gray' }}>无</span>
  )
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
        {!modify && content}
        {modify && (
          <Popover
            title={
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <h3 style={{ margin: '5px 0' }}>分配迭代</h3>
                <Button
                  size="small"
                  type="text"
                  onClick={() => setModify(false)}>
                  <CloseOutlined />
                </Button>
              </div>
            }
            open
            trigger={'click'}
            arrow={false}
            content={
              <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                <Divider style={{ margin: '0 0 10px 0' }} />
                <Input prefix={<SearchOutlined />} placeholder="Search...." />
                <Button
                  type="text"
                  style={{ textAlign: 'left' }}
                  onClick={() => {
                    setModify(false)
                    setContent(<span style={{ color: 'gray' }}>无</span>)
                  }}>
                  无迭代
                </Button>
                <Divider style={{ margin: '5px 0' }} />
                {data.iterations.map((item) => (
                  <Button
                    type="text"
                    style={{ textAlign: 'left' }}
                    key={item}
                    onClick={() => {
                      setContent(<span>{item}</span>)
                      setModify(false)
                    }}>
                    {item}
                  </Button>
                ))}
              </div>
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
