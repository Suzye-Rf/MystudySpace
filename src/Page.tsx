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

const Page: React.FC = () => {
  const Vi = Listsvisibility()
  const newliststat = newliststats()
  const liststore = useListStore()
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
          <div style={{ height: '93vh', backgroundColor: '#ffffff' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                height: '100%',
                width: '100%',
                display: 'flex',
                flexFlow: 'row nowrap',
                overflowX: 'scroll',
              }}>
              <List
                {...{
                  title: '开放中',
                  form:'',
                  tag:<></>,
                  data1: 0,
                  data2: 0,
                  plusActivated: true,
                  optionActivated: false,
                  Display: Vi.Opening,
                }}
                key={Vi.key}
              />
              {liststore.lists.map((item) => {
                return <List {...item} />
              })}
              <List
                {...{
                  title: 'Closed',
                  form:'',
                  tag:<></>,
                  data1: 0,
                  data2: 0,
                  plusActivated: false,
                  optionActivated: false,
                  Display: Vi.Closed,
                }}
                key={Vi.key + 10}
              />
              <NewList
                {...{
                  visibility: newliststat.newlistvisible,
                }}
                key={newliststat.key}></NewList>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default Page
