import React, { useState } from 'react'
import {
  Button,
  Popover,
  Radio,
  RadioChangeEvent,
  Space,
  Input,
  Tag,
} from 'antd'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { newliststats } from '../store/NewListListener'
const { Search } = Input
const content = [
  {
    key: 1001,
    cont: [
      {
        key: 1,
        value: 1,
        color: '#36454F',
        content: 'AI',
      },
      {
        key: 2,
        value: 2,
        color: '#6699CC',
        content: 'API',
      },
      {
        key: 3,
        value: 3,
        color: '#9400D3',
        content: 'Backend',
      },
      {
        key: 4,
        value: 4,
        color: '#6699CC',
        content: 'Doing',
      },
      {
        key: 5,
        value: 5,
        color: '#009966',
        content: 'Done',
      },
      {
        key: 6,
        value: 6,
        color: '#0000FF',
        content: 'Frontend',
      },
      {
        key: 7,
        value: 7,
        color: '#36454F',
        content: 'AI',
      },
    ],
  },
  {
    key: 1002,
    cont: [
      {
        key: 10,
        value: 1,
        color: '#36454F',
        content: '某某某1号',
      },
      {
        key: 11,
        value: 2,
        color: '#36454F',
        content: '某某某2号',
      },
      {
        key: 12,
        value: 3,
        color: '#36454F',
        content: '某某某3号',
      },
    ],
  },
  {
    key: 1003,
    cont: [
      {
        key: 101,
        value: 1,
        color: '#ffffff',
        content: '人才成长体系',
      },
    ],
  },
  {
    key: 1004,
    cont: [
      {
        key: 1,
        value: 1,
        color: '#ffffff',
        content: '2021-7-10 00:00:00  -  2022-7-10 00:00:00',
      },
    ],
  },
]

const NewList: React.FC<{ visibility: string }> = (props) => {
  const boxstyle = {
    // default boxstyle
    width: '400px',
    height: '95%',
    backgroundColor: '#FBFAFD',
    display: props.visibility,
  }
  const stats = newliststats()
  const [stylestate, setStyle] = useState(boxstyle)
  const [value, setValue] = useState(1)
  const [btnvalue, setBtnValue] = useState('选择一个标记')
  const [selected, setSelected] = useState(false)
  const [popup, setPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [originalmap, setOriginalMap] = useState(content[value - 1].cont)
  const [filteredmap, setFilteredMap] = useState(content[value - 1].cont)
  const [radiokey, setRadioKey] = useState(1000)
  const style = { margin: 20 }
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
    console.log(e.target.value, value)
    setOriginalMap(content[e.target.value - 1].cont)
    

    setRadioKey(radiokey + 1)
    setDanger(false)
    setDangerNotice('none')
    switch (e.target.value) {
      case 1: {
        setBtnValue('选择一个标记')

        break
      }
      case 2: {
        setBtnValue('选择指派人')
        break
      }
      case 3: {
        setBtnValue('选择里程碑')
        break
      }
      case 4: {
        setBtnValue('选择迭代')
        break
      }
    }

    setPopup(false)
    setSelected(false)
  }

  const handleCancel = () => {
    setStyle({
      // default boxstyle
      width: '400px',
      height: '95%',
      backgroundColor: '#FBFAFD',
      display: 'none',
    })
    stats.updateState('none')
    stats.updateBtn()
    stats.updateNotion()
  }
  const handleSelectChange = (e: RadioChangeEvent) => {
    setPopup(false)
    setBtnValue(`${content[value - 1].cont[e.target.value - 1].content}`)
    setDanger(false)
    setDangerNotice('none')
    setSelected(true)
  }
  const [danger, setDanger] = useState(false)
  const [dangerNotice, setDangerNotice] = useState('none')

  const [loading, setLoading] = useState(false)
  const handleOk = () => {
    setPopup(false)
    setLoading(true)
    if (!selected) {
      setLoading(false)
      setDanger(true)
      setDangerNotice('block')
    } else {
      setTimeout(() => {
        setDanger(false)
        setDangerNotice('none')
        setLoading(false)
        //这里写提交的函数，参数为数据数组的value
      }, 300)
    }
  }

  return (
    <div style={stylestate} className="box1">
      <div style={{ height: '100%' }} className="inbox">
        <div>
          <Space direction="vertical">
            <h2 style={style}>新建列表</h2>
          </Space>
          <div style={style}>
            <h3 style={{ margin: 0 }}>
              <strong>范围</strong>
            </h3>
            <p style={{ margin: 0, color: 'gray' }}>
              议题必须与此范围匹配才能出现在此列表中。
            </p>
          </div>
          <div style={style}>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>标记</Radio>
                <Radio value={2}>指派人</Radio>
                <Radio value={3}>里程碑</Radio>
                <Radio value={4}>迭代</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div style={style}>
            <Space direction="vertical">
              <h3 style={{ margin: 0 }}>
                <strong>值</strong>
              </h3>
              <Popover
                placement="bottomLeft"
                trigger={'click'}
                arrow={false}
                destroyTooltipOnHide
                open={popup}
                content={
                  <div
                    style={{
                      width: 250,
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      alignItems: 'center',
                      overflow: 'hidden',
                    }}>
                    <Search
                      onSearch={(e) => {
                        setOriginalMap(content[value - 1].cont)
                        if (e.length === 0) {
                          setFilteredMap(originalmap)
                        } else {
                          setFilteredMap(
                            originalmap.filter((it) =>
                              it.content
                                .toLowerCase()
                                .includes(searchtext.toLowerCase())
                            )
                          )
                        }
                        setRadioKey(radiokey + 1)
                        // console.log(e)
                        // console.log("原始",originalmap)
                        // console.log("过滤后",filteredmap)
                      }}
                      placeholder="Search..."
                      value={searchtext}
                      onChange={(e) => {
                        setSearchText(e.target.value)
                      }}
                    />
                    <div
                      style={{
                        width: '95%',
                        height: '150px',
                        overflowY: 'scroll',
                      }}>
                      <Radio.Group
                        key={radiokey}
                        onChange={handleSelectChange}
                        id="radio">
                        <Space direction="vertical">
                          {filteredmap.map((item) => (
                            <>
                              <div style={{ padding: 5 }}>
                                <Radio value={item.value}>
                                  <Tag
                                    color={item.color}
                                    style={{ color: item.color }}>
                                    .
                                  </Tag>
                                  {item.content}
                                </Radio>
                              </div>
                            </>
                          ))}
                        </Space>
                      </Radio.Group>
                    </div>
                  </div>
                }>
                <Button
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onClick={() => {
                    if (popup) setPopup(false)
                    else setPopup(true)
                    setFilteredMap(originalmap)
                    //状态的承载不能同时
                  }}
                  danger={danger}>
                  <p>{btnvalue}</p> <DownOutlined size={5} />
                </Button>
                <span style={{ display: dangerNotice }}>
                  <p style={{ color: 'red' }}>该字段是必填字段。</p>
                </span>
              </Popover>
            </Space>
          </div>
        </div>
        <div>
          <Button
            style={style}
            type="primary"
            onClick={handleOk}
            loading={loading}>
            添加到面板
          </Button>
          <Button onClick={handleCancel}>取消</Button>
        </div>
      </div>
    </div>
  )
}

export default NewList