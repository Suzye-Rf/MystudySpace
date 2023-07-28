import { useEffect, useState } from 'react'
import './App.css'
import Page from './Page'
import { BlockStoreProvider, blockStore } from './store/BlockStore'
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
              <BlockStoreProvider>
                <StoreListProvider>
                  <Page />
                  {/* 这东西要是能少点就好了 应该有办法吧 */}
                </StoreListProvider>
              </BlockStoreProvider>
            </NewliststatsProvider>
          </ListVisibilityProvider>
        </CurrentDashboardUpdater>
        {/** 这逼玩意... */}
      </DashBoardStoreProvider>
    </>
  )
}

export default App
