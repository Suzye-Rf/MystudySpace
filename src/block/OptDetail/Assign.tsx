import {
  DownCircleOutlined,
  LoadingOutlined,
  SearchOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Button, Checkbox, Divider, Input, Popover } from 'antd'
import { useState } from 'react'
import data from '../../data/Data.json'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { dataSource } from '../../store/BlockData'
const Assign: React.FC<{ id: number; data: CheckboxValueType[] }> = (props) => {
  const DB = dataSource()
  const [modify, setModify] = useState(false)
  const [NoneC, setNoneC] = useState(true)
  const [Selected, setOptions] = useState<CheckboxValueType[]>(props.data)
  const [Modified, setModified] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Loaded, setLoaded] = useState(true)
  let ass = DB.dataState.find((i) => i.id === props.id)?.data
    .Assign as CheckboxValueType[]
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>
            {Selected.length}位指派人{Loading && <LoadingOutlined />}
          </strong>
        </span>
        <Button
          type="text"
          size="small"
          onClick={() => {
            if (modify) {
              setModified(false)
              setModify(false)
              setLoading(true)
              setLoaded(false)
              setTimeout(() => {
                setLoading(false)
                setLoaded(true)
                console.log(ass)
              }, 500)
            } else {
              setModified(false)
              setModify(true)
            }
          }}>
          {Modified ? '应用' : '编辑'}
        </Button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        {!modify && !Selected.length && (
          <span style={{ color: 'gray' }}>
            无 -{' '}
            <a
              href="#"
              onClick={() => {
                setNoneC(false)
                setLoading(true)
                setLoaded(false)
                setTimeout(() => {
                  setLoading(false)
                  setLoaded(true)
                  setOptions(['某某某一号'])

                  if (!ass.includes('某某某一号')) ass.push('某某某一号')
                }, 500)
              }}>
              分配给自己
            </a>
          </span>
        )}
        {modify && (
          <>
            <Popover
              open
              arrow={false}
              trigger={'click'}
              title={'分配到'}
              content={
                <>
                  <Divider style={{ margin: '3px 0' }} />
                  <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder="Search"
                      autoFocus></Input>
                    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                      <Button
                        key={'None'}
                        style={{ textAlign: 'left' }}
                        type="text">
                        <Checkbox
                          checked={NoneC && ass.length === 0}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setModified(true)
                              setNoneC(e.target.checked)
                              setOptions([])
                              for (let i = 0; i <= ass.length; i++) {
                                ass.pop()
                              }
                            }
                          }}>
                          未分配
                        </Checkbox>
                      </Button>
                      <Checkbox.Group
                        style={{ display: 'flex', flexFlow: 'column nowrap' }}
                        value={Selected}
                        onChange={(value) => {
                          setOptions(value)
                          value.forEach((item) => {
                            if (!ass.includes(item)) ass.push(item)
                          })
                        }}>
                        <Divider style={{ margin: '3px 0' }} />
                        {data.Assigner.map((item) => (
                          <Button
                            key={item.Name}
                            type="text"
                            style={{ textAlign: 'left' }}>
                            <Checkbox
                              value={item.Name}
                              onChange={() => {
                                setNoneC(false)
                                setModified(true)
                              }}>
                              {item.Name}
                            </Checkbox>
                          </Button>
                        ))}
                      </Checkbox.Group>
                    </div>
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
                autoFocus
                onClick={() => {
                  if (modify) {
                    setModify(false)
                    setModified(false)
                  } else {
                    setModify(true)
                    setModified(true)
                  }
                }}>
                指派人
                <DownCircleOutlined />
              </Button>
            </Popover>
          </>
        )}
      </div>
      {Loaded &&
        !modify &&
        Selected.map((item) => (
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
            key={String(item)}>
            <Avatar icon={<UserOutlined />} />
            <div
              style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'space-between',
                margin: '5px 0',
              }}>
              <span>{item}</span>
              <span>
                {data.Assigner.find((it) => item === it.Name)?.account}
              </span>
            </div>
          </div>
        ))}
    </div>
  )
}
export default Assign
