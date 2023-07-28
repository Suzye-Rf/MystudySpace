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

const Page: React.FC = () => {
  const Vi = Listsvisibility()
  const newliststat = newliststats()
  const liststore = useListStore()
  const blockstore = blockStore()

  // Create Animation drag
  
   

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
                <div  key={item.belongsTo} >
                  <List {...item} ICanDrag  />
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
    </>
  )
}

export default Page
