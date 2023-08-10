import {
  CloseOutlined,
  SearchOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Input, Popover, Tag } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import data from '../../data/Data.json'

import { useEffect, useState } from 'react'

const Mark: React.FC = () => {
  const handleCheckBoxChange = (value: CheckboxValueType[]) => {
    makeMarkText(() => {
      if (value.length === 0)
        return <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
      else if (value.length === 1)
        return <p style={{ color: 'gray', margin: 2 }}>{value[0]}</p>
      else
        return (
          <p style={{ color: 'gray', margin: 2 }}>
            {value[0] + '+' + (value.length - 1)}
          </p>
        )
    })
    setMarkList(value)
  }

  const [Marks, makeMark] = useState(false),
    [marksText, makeMarkText] = useState(
      // TODO:Here should be a multiple of iterations
      <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
    ),
    [marklist, setMarkList] = useState<CheckboxValueType[]>([])

  useEffect(() => {
    makeMarkText(() => {
      if (marklist.length === 0)
        return <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
      else if (marklist.length === 1)
        return <p style={{ color: 'gray', margin: 2 }}>{marklist[0]}</p>
      else
        return (
          <p style={{ color: 'gray', margin: 2 }}>
            {marklist[0] + '+' + (marklist.length - 1)}
          </p>
        )
    })
  }, [marksText])
  return (
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
        <Button
          type="text"
          size="small"
          onClick={() => (Marks ? makeMark(false) : makeMark(true))}>
          编辑
        </Button>
      </div>
      <div style={{ margin: 3 }}>
        {Boolean(marklist.length) &&
          marklist.map((item) => (
            <Tag
              color={data.Marks.filter((it) => it.Name === item)[0].Color}
              key={String(item)}
              style={{ margin: '5px' }}>
              {item}
              <Button
                type="text"
                size="small"
                style={{ margin: 0 }}
                onClick={() => {
                  setMarkList(
                    marklist.filter((i) => String(i) !== String(item))
                  )
                }}>
                <CloseOutlined size={1} />
              </Button>
            </Tag>
          ))}
      </div>
      {!Marks && !Boolean(marklist.length) && marksText}
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
        }}>
        {Marks && (
          <Popover
            arrow={false}
            open
            placement="top"
            content={
              <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                <Input prefix={<SearchOutlined />} placeholder="搜索标记" />
                <div>
                  <Checkbox.Group
                    style={{
                      height: 120,
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      overflowY: 'scroll',
                      borderBottom: '1px solid gray',
                    }}
                    onChange={handleCheckBoxChange}
                    value={marklist}>
                    {data.Marks.map((items) => (
                      <Button
                        type="text"
                        style={{ textAlign: 'left' }}
                        key={items.Name}>
                        <Checkbox value={items.Name}>
                          <Tag
                            color={items.Color}
                            style={{ color: items.Color }}>
                            a
                          </Tag>
                          {items.Name}
                        </Checkbox>
                      </Button>
                    ))}
                  </Checkbox.Group>
                </div>
                <Button type="text" style={{ textAlign: 'left' }}>
                  创建 project 标记
                </Button>
                <Button type="text" style={{ textAlign: 'left' }}>
                  管理 project 标记
                </Button>
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
                Marks ? makeMark(false) : makeMark(true)
              }}>
              {marksText}
              <DownOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </div>
  )
}
export default Mark
