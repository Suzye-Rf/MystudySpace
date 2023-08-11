import { Divider } from 'antd'
import Title from './OptDetail/Title'
import Assign from './OptDetail/Assign'
import ShitPoem from './OptDetail/ShitPoem'
import Milestone from './OptDetail/MileStone'
import Iterator from './OptDetail/Itearation'
import UsedTime from './OptDetail/UsedTime'
import DeadLine from './OptDetail/DeadLine'
import Mark from './OptDetail/Mark'
import Weigh from './OptDetail/Weigh'
import Private from './OptDetail/Privacy'
import Notice from './OptDetail/Notice'
import { dataSource } from '../store/BlockData'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

const Detail: React.FC<{ Name: string; id: number }> = (props) => {
  const style = { margin: '15px 0' }
  const dts = dataSource()
  return (
    <>
      <Title Name={props.Name} id={props.id} />
      <Divider style={style} />
      <Assign
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .Assign as CheckboxValueType[]
        }
      />
      <Divider style={style} />
      <ShitPoem
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .ShitPoem as string[]
        }
      />
      <Divider style={style} />
      <Milestone
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .MileStone as string[]
        }
      />
      <Divider style={style} />
      <Iterator
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .Iteration as JSX.Element[]
        }
      />
      <Divider style={style} />
      <UsedTime />
      <Divider style={style} />
      <DeadLine
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .DeadLine as string[]
        }
      />
      <Divider style={style} />
      <Mark
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .Mark as CheckboxValueType[][]
        }
      />
      <Divider style={style} />
      <Weigh
        id={props.id}
        data={
          dts.dataState.find((i) => i.id === props.id)?.data
            .Weight as string[]
        }
      />
      <Divider style={style} />
      <Private />
      <Divider style={style} />
      <Notice />
    </>
  )
}
export default Detail
