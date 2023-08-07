import { Form } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Assigners from './Forms/Assigners'
import Iterations from './Forms/Iterations'
import Marks from './Forms/Marks'
import MileStone from './Forms/MileStone'
import Weight from './Forms/Weight'

const OptForm: React.FC = () => {
  return (
    <div>
      <Form.Item name={'milestone'}>
        <MileStone />
      </Form.Item>
      <Form.Item name={'iteration'}>
        <Iterations />
      </Form.Item>
      <Form.Item name={'mark'}>
        <Marks />
      </Form.Item>
      <Form.Item name="assigners">
        <Assigners />
      </Form.Item>
      <Form.Item name={'weight'}>
        <Weight />
      </Form.Item>
    </div>
  )
}
export default OptForm
