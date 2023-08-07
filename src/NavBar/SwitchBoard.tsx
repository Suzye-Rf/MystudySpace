import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Modal, Popover } from 'antd'
import { useState } from 'react'
import { usedDashBoardStore } from '../store/MainDashBoradStates'
import { currentdashboard } from '../store/CurrentDashBorad'
import NewBoard from './NewDashBoard'
// ----------------------------------------------------------------
const SwitchBoard: React.FC = () => {
  const { DashBoards } = usedDashBoardStore()
  const { Update, current } = currentdashboard()
  const [searchtext, setSearchText] = useState('')
  
  const handleButtonClick = (key: string) => {
    console.log(key)
    Update(key)
    // TODO: Handle button clicks here instead of using the default implementation.
  }
  
  return (
    <>
      <span className="AddDashBoard" style={{ flexGrow: 1, margin: '0 5px' }}>
        <Popover
          trigger={'click'}
          style={{ width: '600px' }}
          arrow={false}
          content={
            <>
              <div>
                <strong
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  切换看板
                </strong>
              </div>
              <Divider />
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search"
                value={searchtext}
                onChange={(e) => {
                  setSearchText(e.target.value)
                }}
              />
              
              {DashBoards.map((dashboard) => (
                <Button
                  type="text"
                  key={dashboard.key}
                  style={{ width: '100%', display: 'flex' }}
                  onClick={() => handleButtonClick(dashboard.title)}>
                  {dashboard.title}
                </Button>
              ))}
              <Divider />
              <NewBoard />
            </>
          }>
          <Button style={{ width: '150px' }}>
            <span
              className="cont"
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <span style={{ height: '100%' }}>{current}</span>
              <DownOutlined />
            </span>
          </Button>
        </Popover>
        
      </span>
    </>
  )
}
export default SwitchBoard
//----------------------------------------------------------------
