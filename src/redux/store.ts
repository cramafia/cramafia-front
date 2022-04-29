import { combineReducers, configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/global.reducer'
import rulesReducer from './reducers/rules.reducer'
import { baseApi } from 'src/services/base.api'
import { authMiddleware } from 'src/middlewares/auth.middleware'

const rootReducer = combineReducers({
  global: globalReducer,
  rules: rulesReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})

export type stateType = ReturnType<typeof store.getState>
