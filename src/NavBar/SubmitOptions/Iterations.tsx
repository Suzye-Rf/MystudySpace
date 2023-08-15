import {
  SearchOutlined,
  ClockCircleOutlined,
  DownOutlined,
} from '@ant-design/icons'
import { Button, Popover, Input, Divider } from 'antd'
import data from '../../data/Data.json'
import { useState } from 'react'

const Iterations: React.FC<{ Iteration: JSX.Element[] }> = (prop) => {
  //迭代状态
  const [Iterations, makeIterations] = useState(false),
    [iterationsText, makeIterationsT] = useState(
      <p style={{ color: 'gray', margin: 2 }}>任何迭代</p>
    )
  return (
    <div
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
        <p>迭代</p>
        <Button
          type="text"
          size="small"
          onClick={() => {
            Iterations ? makeIterations(false) : makeIterations(true)
          }}>
          编辑
        </Button>
      </div>
      {!Iterations && iterationsText}
      {Iterations && (
        <>
          <Popover
            open
            arrow={false}
            placement="bottom"
            content={
              <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                <Input prefix={<SearchOutlined />} placeholder="搜索迭代" />
                <Button
                  onClick={() => {
                    makeIterationsT(
                      <p style={{ color: 'gray', margin: 2 }}>任何迭代</p>
                    )
                    makeIterations(false)
                    if (prop.Iteration.length !== 0) prop.Iteration.pop()
                    prop.Iteration.push(
                      <p style={{ color: 'gray', margin: 2 }}>任何迭代</p>
                    )
                  }}
                  type="text"
                  style={{ textAlign: 'left' }}>
                  任何迭代
                </Button>
                <Button
                  onClick={() => {
                    makeIterationsT(
                      <strong style={{ margin: 2 }}>无迭代</strong>
                    )
                    makeIterations(false)
                    if (prop.Iteration.length !== 0) prop.Iteration.pop()
                    prop.Iteration.push(<p style={{ margin: 2 }}>无迭代</p>)
                  }}
                  type="text"
                  style={{ textAlign: 'left' }}>
                  无迭代
                </Button>
                <Button
                  onClick={() => {
                    makeIterationsT(
                      <strong style={{ margin: 2 }}>当前迭代</strong>
                    )
                    makeIterations(false)
                    if (prop.Iteration.length !== 0) prop.Iteration.pop()
                    prop.Iteration.push(<p style={{ margin: 2 }}>当前迭代</p>)
                  }}
                  type="text"
                  style={{ textAlign: 'left' }}>
                  当前迭代
                </Button>
                <Divider />
                <div
                  style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    justifyContent: 'space-between',
                  }}>
                  <strong>成绩预测</strong>
                  <span>
                    <ClockCircleOutlined />
                    每一周
                  </span>
                </div>
                {data.iterations.map((items) => (
                  <Button
                    type="text"
                    key={items}
                    style={{ textAlign: 'left' }}
                    onClick={() => {
                      makeIterationsT(<strong>{items}</strong>)
                      makeIterations(false)
                      if (prop.Iteration.length !== 0) prop.Iteration.pop()
                      prop.Iteration.push(<strong>{items}</strong>)
                    }}>
                    {items}
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
              onClick={() => {
                Iterations ? makeIterations(false) : makeIterations(true)
              }}>
              {iterationsText}
              <DownOutlined />
            </Button>
          </Popover>
        </>
      )}
    </div>
  )
}
export default Iterations
