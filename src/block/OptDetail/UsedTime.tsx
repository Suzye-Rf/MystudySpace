import { QuestionCircleOutlined } from "@ant-design/icons"
import { Button, Tooltip } from "antd"

const UsedTime : React.FC = () => {
  return (
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
          <Tooltip title={'如何跟踪时间'} placement='left'>
            <Button type="link" style={{ color: 'black' }} size="small">
              <QuestionCircleOutlined />
            </Button>
          </Tooltip>
        </div>
        <div>
          <span style={{ color: 'gray' }}>无预计或已用时间</span>
        </div>
      </div>
  )
}
export default UsedTime