import './App.css'
import Page from './Page'
import { CurrentDashboardUpdater } from './store/CurrentDashBorad'
import { ListVisibilityProvider } from './store/ListVisibility'
import { DashBoardStoreProvider } from './store/MainDashBoradStates'
import { NewliststatsProvider } from './store/NewListListener'

const App = () => {
  return (
    <>
      <DashBoardStoreProvider>
        <CurrentDashboardUpdater>
          <ListVisibilityProvider>
            <NewliststatsProvider>
              <Page />
            </NewliststatsProvider>
          </ListVisibilityProvider>
        </CurrentDashboardUpdater>
        {/** 这逼玩意... */}
      </DashBoardStoreProvider>
    </>
  )
}

export default App
