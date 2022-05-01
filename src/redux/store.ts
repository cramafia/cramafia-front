import { combineReducers, configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/global.reducer'
import rulesReducer from './reducers/rules.reducer'
import socketReducer from './reducers/socket.reducer'
import { baseApi } from '@/services/base.api'

const rootReducer = combineReducers({
  global: globalReducer,
  rules: rulesReducer,
  socket: socketReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware),
})

export type stateType = ReturnType<typeof store.getState>
