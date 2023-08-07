import { Button, Checkbox, Form, Input, Modal } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useForm } from 'antd/es/form/Form'
import { useEffect, useState } from 'react'
import { Listsvisibility } from '../store/ListVisibility'
import ListOptions from './ListOption'
import OptForm from '../Edit/Form'

const NewBoard = () => {
  const [form] = useForm()
  const [modalstat, setmodalstat] = useState(false)

  const handleCreateDashboard = () => {
    setmodalstat(true)
  }
  const onCancel = () => {
    setmodalstat(false)
  }
  const onSubmit = () => {}
  const [extend, setExtend] = useState(false)
  const [extendtext, setExtendtext] = useState('展开')
  useEffect(() => {
    extend ? setExtendtext('收起') : setExtendtext('展开')
  }, [extend])
  return (
    <>
      <Button
        type="text"
        style={{ width: '100%', display: 'flex' }}
        onClick={handleCreateDashboard}>
        创建新的看板
      </Button>
      <Modal title="创建新看板" open={modalstat} onCancel={onCancel}>
        <Form method="POST" form={form} layout={'vertical'}>
          <Form.Item
            name={'标题'}
            label={<h3 style={{ margin: 0 }}>标题</h3>}
            style={{ padding: 0 }}>
            <Input
              placeholder="输入看板名称"
              style={{ padding: '5px 12px' }}></Input>
          </Form.Item>
          <Form.Item
            name="列表选项"
            label={
              <div>
                <h3 style={{ margin: '10px 0' }}>列表选项</h3>
                <p style={{ color: 'gray', margin: '5px 0' }}>
                  配置显示给任何访问此看板的人的列表
                </p>
              </div>
            }>
            <ListOptions />
          </Form.Item>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <span>
              <div>
                <h3>范围</h3>
              </div>
              <div>
                <p style={{ color: 'gray', margin: '5px 0' }}>
                  看板范围会影响看板访问者可见的议题
                </p>
              </div>
            </span>
            <span>
              <Button
                onClick={() => (extend ? setExtend(false) : setExtend(true))}>
                {extendtext}
              </Button>
            </span>
          </div>

          {extend && <OptForm />}
        </Form>
      </Modal>
    </>
  )
}
export default NewBoard
