import { CopyOutlined } from '@ant-design/icons'
import { Button, Drawer, Space, Tag, message } from 'antd'
import { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Detail from './Detail'

const Blocks: React.FC<{
  name: string
  id: number
  belongsto: number
  cansee: string
  index: number
}> = (props) => {
  const [backgroundColor, setBack] = useState('#FFFFFF')
  const [option, setOption] = useState(false)

  const [adding, makeadding] = useState(false)
  const [status, makeStatus] = useState('添加一个代办事项')
  const [stat, makeStat] = useState(false)
  useEffect(() => {
    if (option) setBack('#E9F3FC')
    else setBack('#FFFFFF')
  }, [option])
  

  const handleAddButtonClick = () => {
    makeadding(true)
    setTimeout(() => {
      if(stat) {
        makeStat(false)
        makeStatus('添加一个代办事项')
      }
      else {
        makeStat(true)
        makeStatus('标记为已完成')
      }
      makeadding(false)
    }, 1000);
  }

  return (
    <>
      <Draggable
        draggableId={`${props.name}`}
        index={props.index}
        key={props.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            key={props.id}>
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
                    <CopyOutlined />
                  </Tag>
                  <p># {props.id}</p>
                </Space>
              </Space>
            </div>
            <Drawer
              open={option}
              onClose={() => setOption(false)}
              title="议题详情"
              extra={
                <Button
                  size="small"
                  onClick={handleAddButtonClick}
                  loading={adding}>
                  {status}
                </Button>
              }>
              <Detail Name={props.name} id={props.id} />
              {/* ここに議題の操作を */}
            </Drawer>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Blocks
