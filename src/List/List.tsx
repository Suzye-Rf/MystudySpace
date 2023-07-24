import {
  CopyOutlined,
  DownOutlined,
  PlusOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Modal, Space, Spin, Tooltip } from 'antd'
import React, { useState } from 'react'
import './style.css'
import { useListStore } from '../store/ListStore'

const List: React.FC<{
  title: string
  form: string //大选项
  tag: JSX.Element //小选项
  data1: number
  data2: number
  plusActivated: boolean
  optionActivated: boolean
  Display: string
}> = (props) => {
  const boxstyle = {
    // default boxstyle
    width: '400px',
    height: '95%',
    backgroundColor: '#ECECEF',
    display: props.Display,
  }
  const toolstyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rotate: '0deg',
  } // default toolstyle
  const liststore = useListStore()
  const [extendState, setExtendedState] = useState(true) // Judge state changes
  const [extended, setExtended] = useState(() => {
    // Set extended state
    return <DownOutlined />
  })
  const [pop, setPop] = useState('收起')
  const [boxStyle, setBoxStyle] = useState(boxstyle) // Set box style
  const [toolStyle, setToolStyle] = useState(toolstyle) // Set tool style
  const [isVisible, setIsVisible] = useState(true) // Set btn visible.
  // The components settings used when the box is expanded.'
  const style = { margin: '5px' }
  const [settingOpen, setSettingOpen] = useState(false) // Set setting to open the drawer
  const [loading, setLoading] = useState(false) // Set loading
  const [showmodal, setShowModal] = useState(false) // Set modal to show
  const compressbox = () => {
    // Compress the box
    setBoxStyle({
      width: '40px',
      height: `${boxStyle.height}`,
      backgroundColor: '#ECECEF',
      display: props.Display,
    })
  }
  const expandbox = () => {
    // Expand the box
    setBoxStyle({
      width: '400px',
      height: '95%',
      backgroundColor: '#ECECEF',
      display: props.Display,
    })
  }

  const handleClick = () => {
    // Handle click: Change the state of the box when the user clicks
    if (extendState) {
      setExtended(() => {
        return <UpOutlined />
      })
      setExtendedState(false)
      setPop('展开')
      compressbox()
      setIsVisible(false)
      setToolStyle({
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        rotate: '90deg',
      })
    } else {
      setExtended(() => {
        return <DownOutlined />
      })
      setExtendedState(true)
      setIsVisible(true)
      expandbox()
      setPop('收起')
      setToolStyle({
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        rotate: '0deg',
      })
    }
  }
  const handleSettings = () => {
    setSettingOpen(true)
  }
  const drawerClose = () => {
    setSettingOpen(false)
  }

  const handleAddButtonClick = () => {}

  const handleCancel = () => {
    setShowModal(false)
  }

  const handleDelete = () => {
    setLoading(true)
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false)
        liststore.DeleteThing(props.title)
      }, 200)
      setShowModal(false)
      setSettingOpen(false)
    }, 100)
  }
  return (
    <div>
      <div style={boxStyle} className="box">
        <Spin spinning={loading}>
          <span className="separator" style={toolStyle}>
            <span style={{ whiteSpace: 'nowrap', margin: '5px' }}>
              <Tooltip placement="top" title={pop}>
                <Button onClick={handleClick} type="text" icon={extended} />
                {/* I'm just a button*/}
              </Tooltip>
              <span>
                <strong style={{ whiteSpace: 'nowrap' }}>{props.title}</strong>
              </span>
            </span>
            <span className="tool" style={{ whiteSpace: 'nowrap' }}>
              <span style={{ whiteSpace: 'nowrap' }}>
                <CopyOutlined style={style} />
                {props.data1}
              </span>
              <span style={{ whiteSpace: 'nowrap', margin: '0 10px 0 0' }}>
                <ShoppingOutlined style={style} />
                {props.data2}
              </span>
              {isVisible && props.plusActivated && (
                <Button.Group style={style}>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={handleAddButtonClick}
                  />
                  {props.optionActivated && (
                    <>
                      <Button
                        icon={<SettingOutlined />}
                        onClick={handleSettings}
                      />
                      <Drawer
                        title="列表设置"
                        extra={
                          <>
                            <Button
                              danger
                              size="small"
                              onClick={() => setShowModal(true)}>
                              删除列表
                            </Button>
                            <Modal
                              title="删除列表"
                              onCancel={handleCancel}
                              onOk={handleDelete}
                              open={showmodal}
                              okButtonProps={{ danger: true }}
                              okText="删除列表"
                              cancelText="取消">
                              您确定要删除此列表吗？
                            </Modal>
                          </>
                        }
                        placement="right"
                        open={settingOpen}
                        onClose={drawerClose}>
                        <Space direction="vertical">
                          <h3 style={{ margin: 0 }}>{props.form}</h3>
                          {props.tag}
                        </Space>
                        <Divider />
                        <Space direction="vertical">
                          <Space direction="horizontal">
                            <h3 style={{ margin: 0 }}>“进行中”限制</h3>
                            <Button size="small" type="text">
                              编辑
                            </Button>
                          </Space>
                          {'无'}
                        </Space>
                      </Drawer>
                    </>
                  )}
                </Button.Group>
              )}
            </span>
          </span>
          <div className="content"></div>
        </Spin>
      </div>
    </div>
  )
}
export default List
