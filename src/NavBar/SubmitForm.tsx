import { Form } from 'antd'
import MileStone from './SubmitOptions/MileStone'
import Iterations from './SubmitOptions/Iterations'
import Marks from './SubmitOptions/Marks'
import Assigners from './SubmitOptions/Assigners'
import Weight from './SubmitOptions/Weight'
import { CheckboxValueType } from 'antd/es/checkbox/Group'


const SubmitForm: React.FC<{
  Milestone: string[]
  Assigner: JSX.Element[]
  Iteration: JSX.Element[]
  Marks:CheckboxValueType[][]
  Weight: JSX.Element[]
}> = (props) => {
  return (
    <div>
      <Form.Item name={'milestone'}>
        <MileStone Milestone={props.Milestone}/>
      </Form.Item>
      <Form.Item name={'iteration'}>
        <Iterations Iteration={props.Iteration} />
      </Form.Item>
      <Form.Item name={'mark'}>
        <Marks Marks={props.Marks} />
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
export default SubmitForm
