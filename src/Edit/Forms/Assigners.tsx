import { SearchOutlined, UserOutlined, DownOutlined } from "@ant-design/icons"
import { Button, Popover, Input, Divider, Avatar } from "antd"
import data from '../../data/Data.json'
import { useState } from "react"



const Assigners : React.FC = () =>{
   //指派人状态
   const [Assigner, makeAssigner] = useState(false),
   [AssignerT, makeAssignerT] = useState(
     <p style={{ color: 'gray', margin: 2 }}>任何指派人</p>
   )
  return ( <div
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
      <p>指派人</p>
      <Button
        type="text"
        size="small"
        onClick={() =>
          Assigner ? makeAssigner(false) : makeAssigner(true)
        }>
        编辑
      </Button>
    </div>
    {!Assigner && AssignerT}
    {Assigner && (
      <Popover
        arrow={false}
        open
        placement="top"
        content={
          <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
            <Input
              prefix={<SearchOutlined />}
              placeholder="搜索指派人"
            />
            <Button
              type="text"
              onClick={() => {
                makeAssignerT(
                  <p style={{ margin: 2,color:'gray'}}>任何指派人</p>
                )
                makeAssigner(false)
              }}>
              任何指派人
            </Button>
            <Divider style={{ margin: 4 }} />
            {data.Assigner.map((items) => (
              <Button
                type="text"
                size="large"
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
                onClick={() => {
                  makeAssignerT(
                    <div style={{display:'flex',flexFlow:'row nowrap',justifyContent:'flex-start',alignItems:'center'}}>
                      <Avatar icon={<UserOutlined />} />
                      <span
                        style={{
                          display: 'flex',
                          flexFlow: 'column nowrap',
                          justifyContent: 'center',
                          margin:'0 5px'
                        }}>
                        <div style={{ fontSize: 15 }}>
                          {items.Name}
                        </div>
                        <div style={{ fontSize: 10 }}>
                          {items.account}
                        </div>
                      </span>
                    </div>
                  )
                  makeAssigner(false)
                }}>
                <Avatar icon={<UserOutlined />} />
                <span
                  style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                  }}>
                  <div style={{ fontSize: 15 }}>{items.Name}</div>
                  <div style={{ fontSize: 10 }}>{items.account}</div>
                </span>
              </Button>
            ))}
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
          onClick={() =>
            Assigner ? makeAssigner(false) : makeAssigner(true)
          }>
          <p style={{margin:2,color:'gray'}}>选择指派人</p>
          <DownOutlined />
        </Button>
      </Popover>
    )}
    {/*TODO: There's a state here,Need 2 be edited*/}
  </div>)
}
export default Assigners