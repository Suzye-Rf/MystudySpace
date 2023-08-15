import { Button, Checkbox, Form, Input, Modal } from 'antd'
import { useEffect, useState } from 'react'
import { currentdashboard } from '../store/CurrentDashBorad'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Listsvisibility } from '../store/ListVisibility'
import OptForm from './OptForm'
import { fuckingStore } from '../store/Dashboards'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

const style = { margin: '2px' }
const Edit: React.FC = () => {
  const dash = fuckingStore() // 这个是全局的    所有看板的     全部数据
  const ListOption = Listsvisibility()
  const Curr = currentdashboard() // 全局的  当前   的状态
  const [showState, setShowState] = useState(false)
  const [thisDashboardName, setThisDashboardName] = useState('')
  const [editable, setEditable] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [checkOpening, setCheckOpening] = useState(true)
  const [checkClose, setCheckClose] = useState(true)

  const handleButtonClick = () => {
    setShowState(true)
    setThisDashboardName(Curr.current)
    setCheckOpening(
      dash.DashBoards.find((item) => item.Name[0] === Curr.current)
        ?.ShowOpen[0] as boolean
    )
    setCheckClose(
      dash.DashBoards.find((item) => item.Name[0] === Curr.current)
        ?.ShowClose[0] as boolean
    )
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
              if (
                dash.DashBoards.find((item) => item.Name[0] === Curr.current)
                  ?.ShowOpen.length !== 0
              ) {
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowOpen.pop()
              }
              if (e.target.checked) {
                ListOption.letOpeningUnvisible('block')
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowOpen.push(true)
                setCheckOpening(true)
              } else {
                ListOption.letOpeningUnvisible('none')
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowOpen.push(false)
                setCheckOpening(false)
              }
            }}>
            显示已打开列表
          </Checkbox>
          <br />
          <Checkbox
            checked={checkClose}
            onChange={(e: CheckboxChangeEvent) => {
              if (
                dash.DashBoards.find((item) => item.Name[0] === Curr.current)
                  ?.ShowClose.length !== 0
              ) {
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowClose.pop()
              }
              if (e.target.checked) {
                ListOption.letClosedUnvisible('block')
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowClose.push(true)
                setCheckClose(true)
              } else {
                ListOption.letClosedUnvisible('none')
                dash.DashBoards.find(
                  (item) => item.Name[0] === Curr.current
                )?.ShowClose.push(false)
                setCheckClose(false)
              }
            }}>
            显示已关闭列表
          </Checkbox>
        </div>
        <div>
          <h3 style={{ margin: '10px 0' }}>范围</h3>
          <p style={{ color: 'gray' }}>看板范围会影响看板访问者可见的议题</p>
          <Form name="editForm" method="POST">
            <OptForm
              {...(dash.DashBoards.find((item) => item.Name[0] === Curr.current)
                ?.props as {
                Milestone: string[]
                Assigner: JSX.Element[]
                Iteration: JSX.Element[]
                Marks: CheckboxValueType[][]
                Weight: JSX.Element[]
              })}
            />
          </Form>
        </div>
      </Modal>
    </>
  )
}
export default Edit
