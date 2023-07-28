import {
  CopyOutlined,
  DownOutlined,
  PlusOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Modal, Space, Spin, Tooltip } from 'antd'
import React, { ReactEventHandler, useEffect, useState } from 'react'
import './style.css'
import { useListStore } from '../store/ListStore'
import NewBlock from '../block/NewBlock'
import Blocks from '../block/Block'
import { blockStore } from '../store/BlockStore'
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd'

const List: React.FC<{
  selfid: number
  belongsTo: number
  title: string
  form: string //大选项
  tag: JSX.Element //小选项
  data1: number
  data2: number
  plusActivated: boolean
  optionActivated: boolean
  Display: string
  ICanDrag: boolean
}> = (props) => {
  const boxstyle = {
    // default boxstyle
    width: '400px',
    height: '100%',
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
  const blockstore = blockStore()
  const [extendState, setExtendedState] = useState(true) // Judge state changes
  const [extended, setExtended] = useState(() => {
    // Set extended state
    return <DownOutlined />
  })
  const [newBlockCansee, setNewBlockCansee] = useState(false)
  const [CanseeStr, setCanseeStr] = useState('none')
  const [newBlockOpened, setNewBlockOpened] = useState(false)
  // 上面是添加block
  // 下面得是数据block
  const [dataBlockCansee, setDataBlockCansee] = useState('block')

  const [pop, setPop] = useState('收起')
  const [boxStyle, setBoxStyle] = useState(boxstyle) // Set box style
  const [toolStyle, setToolStyle] = useState(toolstyle) // Set tool style
  const [isVisible, setIsVisible] = useState(true) // Set btn visible.
  // The components settings used when the box is expanded.'
  const style = { margin: '5px' }
  const [settingOpen, setSettingOpen] = useState(false) // Set setting to open the drawer
  const [loading, setLoading] = useState(false) // Set loading
  const [showmodal, setShowModal] = useState(false) // Set modal to show
  const [data, setData] = useState(
    blockstore.blockList.filter((item) => item.belongsto === props.belongsTo)
      .length
  )
  useEffect(() => {
    setData(
      blockstore.blockList.filter((item) => item.belongsto === props.belongsTo)
        .length
    )
  }, [blockstore.blockList])

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
      height: '100%',
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

      if (newBlockCansee && newBlockOpened) {
        setCanseeStr('none')
        setNewBlockCansee(false)
      }
      setDataBlockCansee('none')
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
      if (!newBlockCansee && newBlockOpened) {
        setCanseeStr('block')
        setNewBlockCansee(true)
      }
      setDataBlockCansee('block')
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

  const handleAddButtonClick = () => {
    if (newBlockCansee) {
      setCanseeStr('none')
      setNewBlockCansee(false)
      setNewBlockOpened(false)
    } else {
      setCanseeStr('block')
      setNewBlockCansee(true)
      setNewBlockOpened(true)
    }
  }

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

  const onDragEnd = (result: any) => {
    const { destination, source } = result
    if (!destination) return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    console.log(props.belongsTo)
    // blockstore.Swap(source.droppableId, destination.droppableId)
  }

  return (
    <>
      <div className="outer">
        <div style={boxStyle} className="box">
          <Spin spinning={loading}>
            <span className="separator" style={toolStyle}>
              <span style={{ whiteSpace: 'nowrap', margin: '5px' }}>
                <Tooltip placement="top" title={pop}>
                  <Button onClick={handleClick} type="text" icon={extended} />
                  {/* I'm just a button*/}
                </Tooltip>
                <span>
                  <strong style={{ whiteSpace: 'nowrap' }}>
                    {props.title}
                  </strong>
                </span>
              </span>
              <span className="tool" style={{ whiteSpace: 'nowrap' }}>
                <span style={{ whiteSpace: 'nowrap' }}>
                  <CopyOutlined style={style} />
                  {data}
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
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable
                droppableId={'container' + props.belongsTo}
                key={props.belongsTo}>
                {(provided, snapshot) => (
                  <div
                    className="content"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? 'lightgray'
                        : '#ECECEF',
                    }}
                    key={props.belongsTo}>
                    {blockstore.blockList.map(
                      (items) =>
                        items.belongsto === props.belongsTo && (
                          <Draggable
                            draggableId={`${items.id}`}
                            index={items.id}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                key={items.id}>
                                <Blocks
                                  name={items.name}
                                  id={items.id}
                                  belongsto={items.belongsto}
                                  cansee={dataBlockCansee}
                                />
                              </div>
                            )}
                          </Draggable>
                        )
                    )}
                    <NewBlock
                      belongsTo={props.belongsTo}
                      Cansee={CanseeStr}
                      action={{
                        todo: setCanseeStr,
                        setstat: setNewBlockOpened,
                        setshow: setNewBlockCansee,
                      }}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Spin>
        </div>
      </div>
    </>
  )
}
export default List
