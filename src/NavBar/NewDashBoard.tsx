import { Button, Form, Input, Modal } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useEffect, useState } from 'react'
import ListOptions from './ListOption'
import SubmitForm from './SubmitForm'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { fuckingStore } from '../store/Dashboards'
import { usedDashBoardStore } from '../store/MainDashBoradStates'

const NewBoard = () => {
  const [form] = useForm()
  const [modalstat, setmodalstat] = useState(false)
  const [ShowOpen, setShowOpen] = useState<boolean[]>([true])
  const [ShowClose, setShowClose] = useState<boolean[]>([true])
  const [prop, propdata] = useState<{
    Milestone: string[]
    Assigner: JSX.Element[]
    Iteration: JSX.Element[]
    Marks: CheckboxValueType[][]
    Weight: JSX.Element[]
  }>({
    Milestone: ['不过滤里程碑'],
    Assigner: [<p style={{ color: 'gray', margin: 2 }}>任何指派人</p>],
    Iteration: [<p style={{ color: 'gray', margin: 2 }}>任何迭代</p>],
    Marks: [[]],
    Weight: [<p style={{ color: 'gray', margin: 2 }}>Any weight</p>],
  })

  const [Okdisable, setOkdisable] = useState(false)

  const [extend, setExtend] = useState(false)
  const [extendtext, setExtendtext] = useState('展开')
  const [NameValue, setNameValue] = useState('')

  const dash = fuckingStore()
  const Mdh = usedDashBoardStore()

  useEffect(() => {
    extend ? setExtendtext('收起') : setExtendtext('展开')
  }, [extend])
  useEffect(() => {
    if (NameValue.length === 0) setOkdisable(true)
    else setOkdisable(false)
  }, [NameValue])
  useEffect(() => {
    setNameValue('')
  }, [modalstat])

  const handleCreateDashboard = () => {
    setmodalstat(true)
    setShowOpen([true])
    setShowClose([true])
    propdata({
      Milestone: ['不过滤里程碑'],
      Assigner: [<p style={{ color: 'gray', margin: 2 }}>任何指派人</p>],
      Iteration: [<p style={{ color: 'gray', margin: 2 }}>任何迭代</p>],
      Marks: [[]],
      Weight: [<p style={{ color: 'gray', margin: 2 }}>Any weight</p>],
    })
  }
  const onCancel = () => {
    setmodalstat(false)
  }
  const onSubmit = () => {
    console.log(ShowOpen, ShowClose, prop)
    setmodalstat(false)
    Mdh.addDashBoard({ title: NameValue, key: NameValue })
    dash.ADD([NameValue], ShowOpen, ShowClose, prop)
  }

  return (
    <>
      <Button
        type="text"
        style={{ width: '100%', display: 'flex' }}
        onClick={handleCreateDashboard}>
        创建新的看板
      </Button>
      <Modal
        title="创建新看板"
        open={modalstat}
        onCancel={onCancel}
        destroyOnClose={true}
        onOk={onSubmit}
        okButtonProps={{ disabled: Okdisable }}>
        <Form method="POST" form={form} layout={'vertical'}>
          {/* <Form.Item
            name={'标题'}
            label={<h3 style={{ margin: 0 }}>标题</h3>}

            style={{ padding: 0 }}> */}
          <h3 style={{ margin: '5px 0' }}>标题</h3>
          <Input
            placeholder="输入看板名称"
            style={{ padding: '5px 12px' }}
            value={NameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          {/* </Form.Item> */}
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
            <ListOptions Open={ShowOpen} Close={ShowClose} />
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

          {extend && <SubmitForm {...prop} />}
        </Form>
      </Modal>
    </>
  )
}
export default NewBoard
