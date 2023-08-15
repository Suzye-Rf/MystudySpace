import { Form } from 'antd'
import Assigners from './Forms/Assigners'
import Iterations from './Forms/Iterations'
import Marks from './Forms/Marks'
import MileStone from './Forms/MileStone'
import Weight from './Forms/Weight'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

const OptForm: React.FC<{
  Milestone: string[]
  Assigner: JSX.Element[]
  Iteration: JSX.Element[]
  Marks: CheckboxValueType[][]
  Weight: JSX.Element[]
}> = (props) => {
  return (
    <div>
      <Form.Item name={'milestone'}>
        <MileStone MileStone={props.Milestone} />
      </Form.Item>
      <Form.Item name={'iteration'}>
        <Iterations Iteration={props.Iteration}/>
      </Form.Item>
      <Form.Item name={'mark'}>
        <Marks Mark={props.Marks} />
      </Form.Item>
      <Form.Item name="assigners">
        <Assigners Assigner={props.Assigner} />
      </Form.Item>
      <Form.Item name={'weight'}>
        <Weight Weight={props.Weight} />
      </Form.Item>
    </div>
  )
}
export default OptForm
