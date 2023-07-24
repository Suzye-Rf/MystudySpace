import React, { useEffect, useState } from 'react'
import {
  Button,
  Popover,
  Radio,
  RadioChangeEvent,
  Space,
  Input,
  Tag,
} from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { newliststats } from '../store/NewListListener'
import { content } from '../data/data'
import { useListStore } from '../store/ListStore'
const { Search } = Input

const NewList: React.FC<{ visibility: string }> = (props) => {
  const boxstyle = {
    // default boxstyle
    width: '400px',
    height: '95%',
    backgroundColor: '#FBFAFD',
    display: props.visibility,
  }
  const liststore = useListStore()
  const stats = newliststats()
  const [stylestate, setStyle] = useState(boxstyle)
  const [value, setValue] = useState(1)
  const [lowerVal, setLowerVal] = useState(1)
  const [btnvalue, setBtnValue] = useState('选择一个标记')
  const [selected, setSelected] = useState(false)
  const [popup, setPopup] = useState(false)
  const [searchtext, setSearchText] = useState('')
  const [originalmap, setOriginalMap] = useState(content[value - 1].cont)
  const [filteredmap, setFilteredMap] = useState(content[value - 1].cont)
  const [radiokey, setRadioKey] = useState(1000)
  const style = { margin: 20 }
  useEffect(() => {
    setFilteredMap(originalmap)
  }, originalmap)
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

  const handleCancelorCommit = () => {
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
    setLowerVal(e.target.value)
    setDanger(false)
    setDangerNotice('none')
    setSelected(true)
  }
  const [danger, setDanger] = useState(false)
  const [dangerNotice, setDangerNotice] = useState('none')
  const [loading, setLoading] = useState(false)

  const commit = (prop: {
    title: string
    form: string
    tag: JSX.Element
    data1: number
    data2: number
    plusActivated: boolean
    optionActivated: boolean
    Display: string
  }) => {
    liststore.AddThing(prop)
  }

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
        commit({
          title: content[value - 1].cont[lowerVal - 1].content,
          form: content[value - 1].main,
          tag: (
            <Tag color={content[value - 1].cont[lowerVal - 1].color} style={{color:'lightgray'}}>
              {content[value - 1].cont[lowerVal - 1].content}
            </Tag>
          ),
          data1: 0, //这两个值需要用全局状态(? )暂时还没想到好方法
          data2: 0,
          plusActivated: true,
          optionActivated: true,
          Display: 'block',
        })
        handleCancelorCommit()
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
                    // setFilteredMap(originalmap)
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
          <Button onClick={handleCancelorCommit}>取消</Button>
        </div>
      </div>
    </div>
  )
}

export default NewList
