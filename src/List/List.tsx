import {
  CopyOutlined,
  DownOutlined,
  PlusOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React, { useState } from 'react'
import { Listsvisibility } from '../store/ListVisibility'
import './style.css'

const List: React.FC<{
  title: string
  data1: number
  data2: number
  plusActivated: boolean
  optionActivated: boolean
  Display:string
}> = (props) => {
  const boxstyle = {
    // default boxstyle
    width: '400px',
    height: '95%',
    backgroundColor: '#ECECEF',
    display: props.Display
  }
  const toolstyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    rotate: '0deg',
  } // default toolstyle

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

  const compressbox = () => {
    // Compress the box
    setBoxStyle({
      width: '40px',
      height: `${boxStyle.height}`,
      backgroundColor: '#ECECEF',
      display: props.Display
    })
    
  }
  const expandbox = () => {
    // Expand the box
    setBoxStyle({
      width: '400px',
      height: '95%',
      backgroundColor: '#ECECEF',
      display: props.Display
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
  const handleButtonClick = () => {}

  return (
    <div>
      <div style={boxStyle} className="box">
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
                <Button icon={<PlusOutlined />} onClick={handleButtonClick} />
                {props.optionActivated && <Button icon={<SettingOutlined />} />}
              </Button.Group>
            )}
          </span>
        </span>
        <div className="content"></div>
      </div>
    </div>
  )
}
export default List
