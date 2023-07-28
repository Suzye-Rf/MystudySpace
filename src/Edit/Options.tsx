import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Select, Switch, Tooltip } from 'antd'
import Edit from './EditButton'
import { newliststats } from '../store/NewListListener'
import { useState } from 'react'

const Options: React.FC = () => {
  const options = newliststats()
  const style = { margin: '2px' }

  const handleCreate = () => {
    
    options.updateState('block')
    options.updateBtn()
    
    options.updateNotion()
  }
  
  
  return (
    <span className="options" style={{ flexGrow: 1, minWidth: 450 }}>
      <span
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
        }}>
        <strong style={{ whiteSpace: 'nowrap' }}>显示标记</strong>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={false}
        />
      </span>
      <span
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
        }}>
        <strong style={{ whiteSpace: 'nowrap' }}>分组方式</strong>
        <Select
          defaultValue={'None'}
          options={[
            { value: 'None', label: 'None', checked: true },
            { value: '史诗', label: '史诗', checked: false },
          ]}></Select>
        <Edit />
        <Tooltip title={ options.notion } mouseEnterDelay={0.7} >
          <Button
            type="primary"
            style={style}
            onClick={handleCreate}
            disabled={options.button}>
            创建列表
          </Button>
        </Tooltip>
      </span>
    </span>
  )
}

export default Options
