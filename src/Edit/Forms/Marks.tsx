import {
  TagsOutlined,
  CloseOutlined,
  SearchOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Button, Tag, Popover, Input, Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import data from '../../data/Data.json'
import { useState } from 'react'

const Marks: React.FC = () => {
  const handleCheckBoxChange = (value: CheckboxValueType[]) => {
    console.log('checked = ', value)
    setMarkList(value)
  }

  //标记状态（复杂
  const [Marks, makeMark] = useState(false),
    [marksText, _makeMarkText] = useState(
      // TODO:Here should be a multiple of iterations
      <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
    ),
    [marklist, setMarkList] = useState<CheckboxValueType[]>([])
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
        <p>标记</p>
        <Button
          type="text"
          size="small"
          onClick={() => {
            Marks ? makeMark(false) : makeMark(true)
          }}>
          编辑
        </Button>
      </div>
      <div style={{ margin: 3 }}>
        {Boolean(marklist.length) && (
          <div style={{ margin: '5 0' }}>
            <TagsOutlined /> {marklist.length}
          </div>
        )}
        {Boolean(marklist.length) &&
          marklist.map((item) => (
            <Tag
              color={data.Marks.filter((it) => it.Name === item)[0].Color}
              key={String(item)}>
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
                        <Tag color={items.Color} style={{ color: items.Color }}>
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
  )
}
export default Marks
