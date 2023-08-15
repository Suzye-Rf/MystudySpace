import { SearchOutlined, DownOutlined } from '@ant-design/icons'
import { Button, Popover, Input, Divider } from 'antd'
import data from '../../data/Data.json'
import { useEffect, useState } from 'react'
import { currentdashboard } from '../../store/CurrentDashBorad'

const MileStone: React.FC<{ MileStone: string[] }> = (prop) => {
  //里程碑状态
  const { current } = currentdashboard()
  const [MileStone, makeMilestone] = useState(false),
    [MileStoneText, makeMilestonet] = useState(
      <p style={{ color: 'gray', margin: 2 }}>不过滤里程碑</p>
    )
  useEffect(() => {
    makeMilestonet(<p style={{ margin: 2 }}>{prop.MileStone[0] as string}</p>)
  }, [current])
  return (
    <div
      style={{
        borderBottom: '1px solid',
        borderBottomColor: 'lightgray',
        display: 'flex',
        flexFlow: 'column nowrap',
      }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <p>里程碑</p>
        <Button
          type="text"
          size="small"
          onClick={() => {
            MileStone ? makeMilestone(false) : makeMilestone(true)
          }}>
          编辑
        </Button>
      </div>
      {!MileStone && MileStoneText}
      {MileStone && (
        <Popover
          defaultOpen
          trigger={'focus'}
          arrow={false}
          placement="bottom"
          content={
            <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Input prefix={<SearchOutlined />} placeholder="搜索里程碑" />
              <Button
                onClick={() => {
                  if (prop.MileStone.length !== 0) prop.MileStone.pop()
                  prop.MileStone.push('不过滤里程碑')
                  makeMilestonet(
                    <p style={{ color: 'gray', margin: 2 }}>不过滤里程碑</p>
                  )
                  makeMilestone(false)
                }}
                type="text"
                style={{ textAlign: 'left' }}>
                不过滤里程碑
              </Button>
              <Button
                onClick={() => {
                  if (prop.MileStone.length !== 0) prop.MileStone.pop()
                  prop.MileStone.push('任何里程碑')
                  makeMilestonet(
                    <strong style={{ margin: 2 }}>任何里程碑</strong>
                  )
                  makeMilestone(false)
                }}
                type="text"
                style={{ textAlign: 'left' }}>
                任何里程碑
              </Button>
              <Button
                onClick={() => {
                  if (prop.MileStone.length !== 0) prop.MileStone.pop()
                  prop.MileStone.push('无里程碑')
                  makeMilestonet(
                    <strong style={{ margin: 2 }}>无里程碑</strong>
                  )
                  makeMilestone(false)
                }}
                type="text"
                style={{ textAlign: 'left' }}>
                无里程碑
              </Button>
              <Button
                onClick={() => {
                  if (prop.MileStone.length !== 0) prop.MileStone.pop()
                  prop.MileStone.push('即将到来')
                  makeMilestonet(
                    <strong style={{ margin: 2 }}>即将到来</strong>
                  )
                  makeMilestone(false)
                }}
                type="text"
                style={{ textAlign: 'left' }}>
                即将到来
              </Button>
              <Button
                onClick={() => {
                  if (prop.MileStone.length !== 0) prop.MileStone.pop()
                  prop.MileStone.push('已开始')
                  makeMilestonet(<strong style={{ margin: 2 }}>已开始</strong>)
                  makeMilestone(false)
                }}
                type="text"
                style={{ textAlign: 'left' }}>
                已开始
              </Button>
              <Divider />
              {data.milestones.map((items) => (
                <Button
                  type="text"
                  key={items}
                  style={{ textAlign: 'left' }}
                  onClick={() => {
                    if (prop.MileStone.length !== 0) prop.MileStone.pop()
                    prop.MileStone.push(items)
                    makeMilestonet(<strong>{items}</strong>)
                    makeMilestone(false)
                  }}>
                  {items}
                </Button>
              ))}
            </div>
          }
          style={{
            width: '100%',
            display: 'flex',
            flexFlow: 'column nowrap',
          }}>
          <Button
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => {
              MileStone ? makeMilestone(false) : makeMilestone(true)
            }}>
            {MileStoneText}
            <DownOutlined />
          </Button>
        </Popover>
      )}
    </div>
  )
}
export default MileStone
