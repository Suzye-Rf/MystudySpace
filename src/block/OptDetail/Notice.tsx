
import { Switch } from 'antd'

const Notice : React.FC = () => {

  return (
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
  )
}
export default Notice