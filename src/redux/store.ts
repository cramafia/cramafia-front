import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/global.reducer'
import rulesReducer from './reducers/rules.reducer'

export const store = configureStore({
  reducer: {
    global: globalReducer,
    rules: rulesReducer,
  },
})

export type stateType = ReturnType<typeof store.getState>
