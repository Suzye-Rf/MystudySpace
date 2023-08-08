import { QuestionCircleOutlined, EyeOutlined } from '@ant-design/icons'
import { Button, Divider, Switch } from 'antd'
import Title from './OptDetail/Title'
import Assign from './OptDetail/Assign'
import ShitPoem from './OptDetail/ShitPoem'
import Milestone from './OptDetail/MileStone'
import Iterator from './OptDetail/Itearation'

const Detail: React.FC<{ Name: string; id: number }> = (props) => {
  return (
    <>
      <Title Name={props.Name} id={props.id} />
      <Divider style={{ margin: '15px 0' }} />
      <Assign />
      <Divider style={{ margin: '15px 0' }} />
      <ShitPoem />
      <Divider style={{ margin: '15px 0' }} />
      <Milestone />
      <Divider style={{ margin: '15px 0' }} />
      <Iterator />
      <Divider style={{ margin: '15px 0' }} />
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
      <Divider style={{ margin: '15px 0' }} />
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
      <Divider style={{ margin: '15px 0' }} />
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
      <Divider style={{ margin: '15px 0' }} />
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
      <Divider style={{ margin: '15px 0' }} />
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
      <Divider style={{ margin: '15px 0' }} />
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>通知</strong>
        </span>
        <Switch />
      </div>
    </>
  )
}
export default Detail
