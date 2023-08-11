import { Layout } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Options from './Edit/Options'
import SwitchBoard from './NavBar/SwitchBoard'
import Searching from './NavBar/Searching'
import List from './List/List'
import { useListStore } from './store/ListStore'
import { Listsvisibility } from './store/ListVisibility'
import NewList from './List/NewList'
import { newliststats } from './store/NewListListener'
import { blockStore } from './store/BlockStore'
import { MouseEventHandler, useState } from 'react'
import { event } from 'jquery'
import { DragDropContext } from 'react-beautiful-dnd'
import { dataSource } from './store/BlockData'

const Page: React.FC = () => {
  const Vi = Listsvisibility()
  const newliststat = newliststats()
  const liststore = useListStore()
  const blockstore = blockStore()
  const DB = dataSource()
  // Create Animation drag
  const onDragEnd = (result: any) => {
    const { destination, source,draggableId } = result
    if (!destination) return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    if (destination.droppableId === source.droppableId) {
      console.log('起始位置是' + source.index, '目标位置是' + destination.index)
      console.log(destination.droppableId, source.droppableId)
      blockstore.Swap(source.index, destination.index)
      console.log(blockstore.blockList)
      
    } else {
      blockstore.Switch(
        parseInt(source.droppableId.charAt(source.droppableId.length - 1)),
        parseInt(
          destination.droppableId.charAt(destination.droppableId.length - 1)
        ),
        source.index,
        destination.index,
        draggableId
      )
      console.log(DB.dataState)
    }
  }
  const onDragStart = (result: any) => {
    const { draggableId } = result
    console.log('已抓取到' + draggableId)
  }

  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: '#FBFAFD',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottom: '1px solid lightgray',
            height: 'fit-content',
            overflow: 'hidden',
          }}>
          <SwitchBoard />
          <Searching />
          <Options />
        </Header>
      </Layout>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Layout style={{ height: '100vh' }}>
          <Content>
            <div
              style={{
                height: '93vh',
                backgroundColor: '#ffffff',
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                overflowX: 'scroll',
                padding: '10px 8px 16px 0',
              }}>
              <List
                {...{
                  selfid: 1,
                  belongsTo: 1,
                  title: '开放中',
                  form: '',
                  tag: <></>,
                  data1: blockstore.blockList.filter(
                    (items) => items.belongsto === 1
                  ).length,
                  data2: 0,
                  plusActivated: true,
                  optionActivated: false,
                  Display: Vi.Opening,
                }}
                key={Vi.key}
                ICanDrag={false}
              />
              
              {liststore.lists.map((item) => {
                return (
                  <div key={item.belongsTo}>
                    <List {...item} ICanDrag />
                  </div>
                )
              })}
              <List
                {...{
                  selfid: 0,
                  belongsTo: 0,
                  title: 'Closed',
                  form: '',
                  tag: <></>,
                  data1: blockstore.blockList.filter(
                    (items) => items.id !== 0 && items.belongsto === 0
                  ).length,
                  data2: 0,
                  plusActivated: false,
                  optionActivated: false,
                  Display: Vi.Closed,
                }}
                ICanDrag={false}
                key={Vi.key + 10}
              />
              <NewList
                {...{
                  visibility: newliststat.newlistvisible,
                }}
                key={newliststat.key}></NewList>
            </div>
          </Content>
        </Layout>
      </DragDropContext>
    </>
  )
}

export default Page
