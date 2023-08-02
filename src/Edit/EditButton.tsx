import {
  Button,
  Checkbox,
  Divider,
  Input,
  Modal,
  Popover,
  Tag,
  Tooltip,
} from 'antd'
import { useRef, useState } from 'react'
import { currentdashboard } from '../store/CurrentDashBorad'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Listsvisibility } from '../store/ListVisibility'
import {
  ClockCircleOutlined,
  CloseOutlined,
  DownOutlined,
  SearchOutlined,
  TagsOutlined,
} from '@ant-design/icons'
import data from '../data/Data.json'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

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
    makeMilestone(false)
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

  const handleCheckBoxChange = (value: CheckboxValueType[]) => {
    console.log('checked = ', value)
    setMarkList(value)
  }
  //里程碑状态
  const [MileStone, makeMilestone] = useState(false),
    [MileStoneText, makeMilestonet] = useState(
      <p style={{ color: 'gray', margin: 2 }}>不过滤里程碑</p>
    )
  //迭代状态
  const [Iterations, makeIterations] = useState(false),
    [iterationsText, makeIterationsT] = useState(
      <p style={{ color: 'gray', margin: 2 }}>任何迭代</p>
    )
  //标记状态（复杂
  const [Marks, makeMark] = useState(false),
    [marksText, makeMarkText] = useState(
      // TODO:Here should be a multiple of iterations
      <p style={{ color: 'gray', margin: 2 }}>任何标记</p>
    ),
    [marklist, setMarkList] = useState<CheckboxValueType[]>([])
  //指派人状态
  const [Assigner, makeAssigner] = useState(false),
    [AssignerT, makeAssignerT] = useState(
      <p style={{ color: 'gray', margin: 2 }}>任何指派人</p>
    )
  //权重状态
  const [Weight, makeWeight] = useState(false),
    [WeightT, makeWeightT] = useState(
      <p style={{ color: 'gray', margin: 2 }}>Any weight</p>
    )

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
          {/* -----------下面都是设置选项了------------- */}
          <div>
            <div
              style={{
                borderBottom: '1px solid',
                borderBottomColor: 'lightgray',
                display: 'flex',
                flexFlow: 'column nowrap',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <p>里程碑</p>
                <Button
                  type="text"
                  size="small"
                  onClick={() => {
                    MileStone ? makeMilestone(false) : makeMilestone(true)
                  }}>
                  编辑
                </Button>
              </div>
              {!MileStone && MileStoneText}
              {MileStone && (
                <Popover
                  open
                  arrow={false}
                  placement="bottom"
                  content={
                    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                      <Input
                        prefix={<SearchOutlined />}
                        placeholder="搜索里程碑"
                      />
                      <Button
                        onClick={() => {
                          makeMilestonet(
                            <p style={{ color: 'gray', margin: 2 }}>
                              不过滤里程碑
                            </p>
                          )
                          makeMilestone(false)
                        }}
                        type="text"
                        style={{ textAlign: 'left' }}>
                        不过滤里程碑
                      </Button>
                      <Button
                        onClick={() => {
                          makeMilestonet(
                            <strong style={{ margin: 2 }}>任何里程碑</strong>
                          )
                          makeMilestone(false)
                        }}
                        type="text"
                        style={{ textAlign: 'left' }}>
                        任何里程碑
                      </Button>
                      <Button
                        onClick={() => {
                          makeMilestonet(
                            <strong style={{ margin: 2 }}>无里程碑</strong>
                          )
                          makeMilestone(false)
                        }}
                        type="text"
                        style={{ textAlign: 'left' }}>
                        无里程碑
                      </Button>
                      <Button
                        onClick={() => {
                          makeMilestonet(
                            <strong style={{ margin: 2 }}>即将到来</strong>
                          )
                          makeMilestone(false)
                        }}
                        type="text"
                        style={{ textAlign: 'left' }}>
                        即将到来
                      </Button>
                      <Button
                        onClick={() => {
                          makeMilestonet(
                            <strong style={{ margin: 2 }}>已开始</strong>
                          )
                          makeMilestone(false)
                        }}
                        type="text"
                        style={{ textAlign: 'left' }}>
                        已开始
                      </Button>
                      <Divider />
                      {data.milestones.map((items) => (
                        <Button
                          type="text"
                          key={items}
                          style={{ textAlign: 'left' }}
                          onClick={() => {
                            makeMilestonet(<strong>{items}</strong>)
                            makeMilestone(false)
                          }}>
                          {items}
                        </Button>
                      ))}
                    </div>
                  }
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}>
                  <Button
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      MileStone ? makeMilestone(false) : makeMilestone(true)
                    }}>
                    {MileStoneText}
                    <DownOutlined />
                  </Button>
                </Popover>
              )}
              {/*TODO: There's a state here,Need 2 be edited*/}
            </div>
            <div
              style={{
                borderBottom: '1px solid',
                borderBottomColor: 'lightgray',
                display: 'flex',
                flexFlow: 'column nowrap',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <p>迭代</p>
                <Button
                  type="text"
                  size="small"
                  onClick={() => {
                    Iterations ? makeIterations(false) : makeIterations(true)
                  }}>
                  编辑
                </Button>
              </div>
              {!Iterations && iterationsText}
              {Iterations && (
                <>
                  <Popover
                    open
                    arrow={false}
                    placement="bottom"
                    content={
                      <div
                        style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                        <Input
                          prefix={<SearchOutlined />}
                          placeholder="搜索迭代"
                        />
                        <Button
                          onClick={() => {
                            makeIterationsT(
                              <p style={{ color: 'gray', margin: 2 }}>
                                任何迭代
                              </p>
                            )
                            makeIterations(false)
                          }}
                          type="text"
                          style={{ textAlign: 'left' }}>
                          任何迭代
                        </Button>
                        <Button
                          onClick={() => {
                            makeIterationsT(
                              <strong style={{ margin: 2 }}>无迭代</strong>
                            )
                            makeIterations(false)
                          }}
                          type="text"
                          style={{ textAlign: 'left' }}>
                          无迭代
                        </Button>
                        <Button
                          onClick={() => {
                            makeIterationsT(
                              <strong style={{ margin: 2 }}>当前迭代</strong>
                            )
                            makeIterations(false)
                          }}
                          type="text"
                          style={{ textAlign: 'left' }}>
                          当前迭代
                        </Button>
                        <Divider />
                        <div
                          style={{
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            justifyContent: 'space-between',
                          }}>
                          <strong>成绩预测</strong>
                          <span>
                            <ClockCircleOutlined />
                            每一周
                          </span>
                        </div>
                        {data.iterations.map((items) => (
                          <Button
                            type="text"
                            key={items}
                            style={{ textAlign: 'left' }}
                            onClick={() => {
                              makeIterationsT(<strong>{items}</strong>)
                              makeIterations(false)
                            }}>
                            {items}
                          </Button>
                        ))}
                      </div>
                    }
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexFlow: 'column nowrap',
                    }}>
                    <Button
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onClick={() => {
                        Iterations
                          ? makeIterations(false)
                          : makeIterations(true)
                      }}>
                      {iterationsText}
                      <DownOutlined />
                    </Button>
                  </Popover>
                </>
              )}
              {/*TODO: There's a state here,Need 2 be edited*/}
            </div>
            <div
              style={{
                borderBottom: '1px solid',
                borderBottomColor: 'lightgray',
                display: 'flex',
                flexFlow: 'column nowrap',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <p>标记</p>
                <Button
                  type="text"
                  size="small"
                  onClick={() => {
                    Marks ? makeMark(false) : makeMark(true)
                  }}>
                  编辑
                </Button>
              </div>
              <div style={{ margin: 3 }}>
                {Boolean(marklist.length) && (
                  <div style={{ margin: '5 0' }}>
                    <TagsOutlined /> {marklist.length}
                  </div>
                )}
                {Boolean(marklist.length) &&
                  marklist.map((item) => (
                    <Tag
                      color={
                        data.Marks.filter((it) => it.Name === item)[0].Color
                      }
                      key={String(item)}>
                      {item}
                      <Button
                        type="text"
                        size="small"
                        style={{ margin: 0 }}
                        onClick={() => {
                          setMarkList(
                            marklist.filter((i) => String(i) !== String(item))
                          )
                        }}>
                        <CloseOutlined size={1} />
                      </Button>
                    </Tag>
                  ))}
              </div>
              {!Marks && !Boolean(marklist.length) && marksText}
              {Marks && (
                <Popover
                  arrow={false}
                  open
                  placement="top"
                  content={
                    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
                      <Input
                        prefix={<SearchOutlined />}
                        placeholder="搜索标记"
                      />
                      <div>
                        <Checkbox.Group
                          style={{
                            height: 120,
                            display: 'flex',
                            flexFlow: 'column nowrap',
                            overflowY: 'scroll',
                            borderBottom: '1px solid gray',
                          }}
                          onChange={handleCheckBoxChange}
                          value={marklist}>
                          {data.Marks.map((items) => (
                            <Button
                              type="text"
                              style={{ textAlign: 'left' }}
                              key={items.Name}>
                              <Checkbox value={items.Name}>
                                <Tag
                                  color={items.Color}
                                  style={{ color: items.Color }}>
                                  a
                                </Tag>
                                {items.Name}
                              </Checkbox>
                            </Button>
                          ))}
                        </Checkbox.Group>
                      </div>
                      <Button type="text" style={{ textAlign: 'left' }}>
                        创建 project 标记
                      </Button>
                      <Button type="text" style={{ textAlign: 'left' }}>
                        管理 project 标记
                      </Button>
                    </div>
                  }
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                  }}>
                  <Button
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      Marks ? makeMark(false) : makeMark(true)
                    }}>
                    {marksText}
                    <DownOutlined />
                  </Button>
                </Popover>
              )}
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
                display: 'flex',
                flexFlow: 'column nowrap',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <p>权重</p>
                <Button
                  type="text"
                  size="small"
                  onClick={() => {
                    Weight ? makeWeight(false) : makeWeight(true)
                  }}>
                  编辑
                </Button>
              </div>
              {!Weight && WeightT}
              {Weight && (
                <Popover
                  open
                  content={
                    <div
                      style={{
                        height: 150,
                        width: 200,
                        overflowY: 'scroll',
                        display: 'flex',
                        flexFlow: 'column nowrap',
                      }}>
                      {data.Weight.map((item) => (
                        <Button
                          type="text"
                          style={{ textAlign: 'left' }}
                          onClick={() => {
                            makeWeightT(
                              <p style={{ color: 'gray', margin: 2 }}>{item}</p>
                            )
                            makeWeight(false)
                          }}>
                          {item}
                        </Button>
                      ))}
                    </div>
                  }>
                  <Button
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      Weight ? makeWeight(false) : makeWeight(true)
                    }}>
                    {WeightT}
                    <DownOutlined />
                  </Button>
                </Popover>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default Edit
