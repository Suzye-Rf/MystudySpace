import { EyeOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const Private: React.FC = () => {
  return (
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
  )
}
export default Private
