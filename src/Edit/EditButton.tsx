import { Button, Checkbox, Form, Input, Modal } from 'antd'
import { useState } from 'react'
import { currentdashboard } from '../store/CurrentDashBorad'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Listsvisibility } from '../store/ListVisibility'
import MileStone from './Forms/MileStone'
import Iterations from './Forms/Iterations'
import Marks from './Forms/Marks'
import Assigners from './Forms/Assigners'
import Weight from './Forms/Weight'
import { useForm } from 'antd/es/form/Form'
import OptForm from './Form'

const style = { margin: '2px' }
const Edit: React.FC = () => {
  const ListOption = Listsvisibility()
  const Curr = currentdashboard()
  const [showState, setShowState] = useState(false)
  const [thisDashboardName, setThisDashboardName] = useState('')
  const [editable, setEditable] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [checkOpening, setCheckOpening] = useState(true)
  const [checkClose, setCheckClose] = useState(true)

  const handleButtonClick = () => {
    setShowState(true)
    setThisDashboardName(Curr.current)
  }

  const handleCancelButtonClick = () => {
    setShowState(false)
  }
  const handleOKClick = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      ListOption.UpdateKey()
      setConfirmLoading(false)
      setShowState(false)
    }, 800)
  }
  

  return (
    <>
      <Button style={style} onClick={handleButtonClick}>
        编辑看板
      </Button>
      <Modal
        open={showState}
        title="编辑看板"
        closable={false}
        onCancel={handleCancelButtonClick}
        okButtonProps={{ disabled: editable }}
        onOk={handleOKClick}
        confirmLoading={confirmLoading}
        destroyOnClose>
        <div>
          <span>
            <h3>标题</h3>
          </span>
          <Input
            type="title"
            style={{ width: '470px' }}
            value={thisDashboardName}
            onChange={(e) => {
              if (e.target.value === '') {
                setEditable(true)
              } else setEditable(false)
              setThisDashboardName(e.target.value)
            }}></Input>
        </div>
        <div>
          <h3 style={{ margin: '10px 0' }}>列表选项</h3>
          <p style={{ color: 'gray', margin: '5px 0' }}>
            配置显示给任何访问此看板的人的列表
          </p>
          <Checkbox
            checked={checkOpening}
            onChange={(e: CheckboxChangeEvent) => {
              if (e.target.checked) {
                ListOption.letOpeningUnvisible('block')
                setCheckOpening(true)
              } else {
                ListOption.letOpeningUnvisible('none')
                setCheckOpening(false)
              }
            }}>
            显示已打开列表
          </Checkbox>
          <br />
          <Checkbox
            checked={checkClose}
            onChange={(e: CheckboxChangeEvent) => {
              if (e.target.checked) {
                ListOption.letClosedUnvisible('block')
                setCheckClose(true)
              } else {
                ListOption.letClosedUnvisible('none')
                setCheckClose(false)
              }
            }}>
            显示已关闭列表
          </Checkbox>
        </div>
        <div>
          <h3 style={{ margin: '10px 0' }}>范围</h3>
          <p style={{ color: 'gray' }}>看板范围会影响看板访问者可见的议题</p>
            <Form name='editForm' method='POST'>
              <OptForm />
            </Form>
        </div>
      </Modal>
    </>
  )
}
export default Edit
