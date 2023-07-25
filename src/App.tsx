import './App.css'
import Page from './Page'
import { CurrentDashboardUpdater } from './store/CurrentDashBorad'
import { StoreListProvider } from './store/ListStore'
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
              <StoreListProvider>
                <Page />

                {/* 这东西要是能少点就好了 应该有办法吧 */}
              </StoreListProvider>
            </NewliststatsProvider>
          </ListVisibilityProvider>
        </CurrentDashboardUpdater>
        {/** 这逼玩意... */}
      </DashBoardStoreProvider>
    </>
  )
}

export default App
