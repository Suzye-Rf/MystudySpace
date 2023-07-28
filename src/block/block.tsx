import { CopyOutlined } from '@ant-design/icons'
import { Button, Drawer, Space, Tag } from 'antd'
import { useEffect, useState } from 'react'

const Blocks: React.FC<{
  name: string
  id: number
  belongsto: number
  cansee: string
}> = (props) => {
  const [backgroundColor, setBack] = useState('#FFFFFF')
  const [option, setOption] = useState(true)
  useEffect(() => {
    if (option) setBack('#E9F3FC')
    else setBack('#FFFFFF')
  }, [option])

  return (
    <>
      <div
        style={{
          margin: '10px',
          width: '95%',
          padding: '5px',
          backgroundColor: backgroundColor,
          borderRadius: '5px',
          display: props.cansee,
        }}
        onClick={() => setOption(true)}>
        <Space direction="vertical" style={{ margin: '0 15px' }}>
          <h3>{props.name}</h3>
          <Space direction="horizontal">
            <Tag color="gray">
              <CopyOutlined  />
            </Tag>
            <p># {props.id}</p>
          </Space>
        </Space>
      </div>
      <Drawer
        open={option}
        onClose={() => setOption(false)}
        title="议题详情"
        extra={<Button size="small">添加一个代办事项</Button>}></Drawer>
    </>
  )
}

export default Blocks
