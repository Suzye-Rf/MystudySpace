import { DownOutlined } from "@ant-design/icons"
import { Button, Popover } from "antd"
import data from '../../data/Data.json'
import { useState } from "react"


const Weight : React.FC = () => {
  //权重状态
  const [Weight, makeWeight] = useState(false),
    [WeightT, makeWeightT] = useState(
      <p style={{ color: 'gray', margin: 2 }}>Any weight</p>
    )
  return (<div
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
      <p>权重</p>
      <Button
        type="text"
        size="small"
        onClick={() => {
          Weight ? makeWeight(false) : makeWeight(true)
        }}>
        编辑
      </Button>
    </div>
    {!Weight && WeightT}
    {Weight && (
      <Popover
        open
        content={
          <div
            style={{
              height: 150,
              width: 200,
              overflowY: 'scroll',
              display: 'flex',
              flexFlow: 'column nowrap',
            }}>
            {data.Weight.map((item) => (
              <Button
                type="text"
                style={{ textAlign: 'left' }}
                onClick={() => {
                  makeWeightT(
                    <p style={{ color: 'gray', margin: 2 }}>{item}</p>
                  )
                  makeWeight(false)
                }}>
                {item}
              </Button>
            ))}
          </div>
        }>
        <Button
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onClick={() => {
            Weight ? makeWeight(false) : makeWeight(true)
          }}>
          {WeightT}
          <DownOutlined />
        </Button>
      </Popover>
    )}
  </div>)
}
export default Weight