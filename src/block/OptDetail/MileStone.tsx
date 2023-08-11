import {
  CheckOutlined,
  DownCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Divider, Input, Popover } from 'antd'
import {  useState } from 'react'
import data from '../../data/Data.json'
import { dataSource } from '../../store/BlockData'

const Milestone: React.FC<{ id: number; data: string[] }> = (props) => {
  const db = dataSource()
  let dts = db.dataState.find((item) => item.id === props.id)?.data
    .MileStone as string[]
  const [modify, setModify] = useState(false)
  const [makeid, setMakeid] = useState(dts[0])
  return (
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
        {!modify &&
          (dts[0] !=='none' ? (
            <span>{makeid}</span>
          ) : (
            <span style={{ color: 'gray' }}>无</span>
          ))}
        {modify && (
          <Popover
            open
            title={'分配 里程碑'}
            arrow={false}
            placement="bottom"
            content={
              <>
                <Divider style={{ margin: '10px 0' }} />
                <Input
                  placeholder="Search...."
                  prefix={<SearchOutlined />}
                  autoFocus
                />
                <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                  <Button
                    type="text"
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      flexFlow: 'row nowrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      setMakeid('none')
                      setModify(false)
                      dts.pop()
                      dts.push('none')
                    }}>
                    无 里程碑
                    <span>{makeid === 'none' && <CheckOutlined />}</span>
                  </Button>
                  <Divider style={{ margin: '5px 0' }} />
                  {data.milestones.map((item) => (
                    <Button
                      type="text"
                      style={{
                        textAlign: 'left',
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      key={item}
                      onClick={() => {
                        {
                          setMakeid(item)
                          
                          setModify(false)
                          dts.pop()
                          dts.push(item)
                        }
                      }}>
                      {item}
                      <span>{makeid === item && <CheckOutlined />}</span>
                    </Button>
                  ))}
                </div>
              </>
            }>
            <Button
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onClick={() => {
                setModify(false)
              }}>
              <span>里程碑</span>
              <DownCircleOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </div>
  )
}
export default Milestone
