import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/global.reducer'

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
})

export type stateType = ReturnType<typeof store.getState>
