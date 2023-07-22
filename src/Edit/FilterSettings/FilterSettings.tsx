import { Button } from 'antd'
import React from 'react'

const FilterSettings: React.FC = () => {
  return (
    <>
      <div
        style={{
          borderBottom: '1px solid',
          borderBottomColor: 'lightgray',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <p>里程碑</p>
          <Button type="text" size="small">
            编辑
          </Button>
        </div>
        <p style={{ color: 'gray', margin: 2 }}>不过滤里程碑</p>
        {/*TODO: There's a state here,Need 2 be edited*/}
      </div>
      <div
        style={{
          borderBottom: '1px solid',
          borderBottomColor: 'lightgray',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <p>迭代</p>
          <Button type="text" size="small">
            编辑
          </Button>
        </div>
        <p style={{ color: 'gray', margin: 2 }}>任何迭代</p>
        {/*TODO: There's a state here,Need 2 be edited*/}
      </div>
      <div
        style={{
          borderBottom: '1px solid',
          borderBottomColor: 'lightgray',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <p>标记</p>
          <Button type="text" size="small">
            编辑
          </Button>
        </div>
        <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
        {/*TODO: There's a state here,Need 2 be edited*/}
      </div>
      <div
        style={{
          borderBottom: '1px solid',
          borderBottomColor: 'lightgray',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <p>指派人</p>
          <Button type="text" size="small">
            编辑
          </Button>
        </div>
        <p style={{ color: 'gray', margin: 2 }}>任何指派人</p>
        {/*TODO: There's a state here,Need 2 be edited*/}
      </div>
      <div
        style={{
          borderBottom: '1px solid',
          borderBottomColor: 'lightgray',
        }}>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <p>权重</p>
          <Button type="text" size="small">
            编辑
          </Button>
        </div>
        <p style={{ color: 'gray', margin: 2 }}>Any weight</p>
        {/*TODO: There's a state here,Need 2 be edited*/}
      </div>
      
    </>
  )
}

export default FilterSettings