import { LoadingOutlined } from '@ant-design/icons'
import { Button, InputNumber } from 'antd'
import { useState } from 'react'
import { dataSource } from '../../store/BlockData'

const Weigh: React.FC<{id:number,data:string[]}> = (props) => {
  const db = dataSource()
  let dts:string[] = db.dataState.find(item => item.id === props.id)?.data.Weight as string[]
  const [modify, setModify] = useState(false)
  const [weight, setWeight] = useState(dts[0])
  const [loading, setLoading] = useState(false)
  const onChange = (e: string | null) => {
    
    setWeight(String(e))
    dts.pop()
    dts.push(String(e))
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
        }}>
        <span>
          <strong>权重{loading && <LoadingOutlined />}</strong>
        </span>
        <Button
          type="text"
          size="small"
          onClick={() => (modify ? setModify(false) : setModify(true))}>
          编辑
        </Button>
      </div>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        {!modify &&
          (dts[0] !== '无' ? (
            <span style={{ color: 'gray' }}>
              {weight} -{' '}
              <a
                onClick={() => {
                  setLoading(true)
                  setTimeout(() => {
                    setLoading(false)
                    dts.pop()
                    dts.push('无')
                  }, 500)
                }}>
                移除权重
              </a>
            </span>
          ) : (
            <span style={{ color: 'gray' }}>无</span>
          ))}
        {modify && (
          <InputNumber<string>
            style={{ width: '100%' }}
            min={'0'}
            defaultValue={weight}
            onChange={onChange}
          />
        )}
      </div>
    </div>
  )
}
export default Weigh
