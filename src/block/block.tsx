import {
  CopyOutlined,
  EyeOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Space, Switch, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Blocks: React.FC<{
  name: string
  id: number
  belongsto: number
  cansee: string
  index: number
}> = (props) => {
  const [backgroundColor, setBack] = useState('#FFFFFF')
  const [option, setOption] = useState(false)
  useEffect(() => {
    if (option) setBack('#E9F3FC')
    else setBack('#FFFFFF')
  }, [option])
  const [Namae, setNama] = useState(props.name)

  return (
    <>
      <Draggable draggableId={`${Namae}`} index={props.index} key={props.id}>
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
              extra={<Button size="small">添加一个代办事项</Button>}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>{Namae}</span>
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>
                    where?/who?/what?/basic#{props.id}
                  </span>
                </div>
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>
                    <strong>{0}位指派人</strong>
                  </span>
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>
                    无 - <a href="#">分配给自己</a>
                  </span>
                </div>
              </div>
              <Divider />
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
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
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
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>
                    <a href="#">蠢材成长体系{'（已逾期）'}</a>
                  </span>
                </div>
              </div>
              <Divider />
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
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>
                    <strong>工时统计</strong>
                  </span>
                  <Button type="text" size="small">
                    <QuestionCircleOutlined />
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
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
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>
                    <strong>标记</strong>
                  </span>
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>
                    <strong>权重</strong>
                  </span>
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>无</span>
                </div>
              </div>
              <Divider />
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <span>
                    <strong>私密性</strong>
                  </span>
                  <Button type="text" size="small">
                    编辑
                  </Button>
                </div>
                <div>
                  <span style={{ color: 'gray' }}>
                    <EyeOutlined />
                    一览无余
                  </span>
                </div>
              </div>
              <Divider />
              <div style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                <span>
                  <strong>通知</strong>
                </span>
                <Switch />
              </div>
              {/* ここに議題の操作を */}
            </Drawer>
          </div>
        )}
      </Draggable>
    </>
  )
}

export default Blocks
