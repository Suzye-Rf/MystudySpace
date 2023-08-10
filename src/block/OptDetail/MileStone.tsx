import {
  CheckOutlined,
  DownCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Button, Divider, Input, Popover } from 'antd'
import { useRef, useState } from 'react'
import data from '../../data/Data.json'

const Milestone: React.FC = () => {
  const [modify, setModify] = useState(false)
  const [makeid, setMakeid] = useState('none')
  const [edit, setEdit] = useState(false)
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
          (edit ? (
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
                      setEdit(false)
                      setModify(false)
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
                          setEdit(true)
                          setModify(false)
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
