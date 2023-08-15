import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Divider, Input, Modal, Popover } from 'antd'
import { useEffect, useState } from 'react'
import { usedDashBoardStore } from '../store/MainDashBoradStates'
import { currentdashboard } from '../store/CurrentDashBorad'
import NewBoard from './NewDashBoard'
import { Listsvisibility } from '../store/ListVisibility'
import { fuckingStore } from '../store/Dashboards'
// ----------------------------------------------------------------
const SwitchBoard: React.FC = () => {
  const { DashBoards } = usedDashBoardStore()
  const { Update, current } = currentdashboard()
  const [searchtext, setSearchText] = useState('')

  const ListOption = Listsvisibility()
  const dash = fuckingStore()
  const handleButtonClick = (key: string) => {
    Update(key)
  }
  useEffect(() => {
    console.log(current,dash.DashBoards)
    ListOption.letOpeningUnvisible(
      (dash.DashBoards.find((item) => item.Name[0] === current)
        ?.ShowOpen[0] as boolean)
        ? 'block'
        : 'none'
    )
    ListOption.letClosedUnvisible(
      (dash.DashBoards.find((item) => item.Name[0] === current)
        ?.ShowClose[0] as boolean)
        ? 'block'
        : 'none'
    )
    ListOption.UpdateKey()
  },[current])

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
