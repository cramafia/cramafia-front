import { combineReducers, configureStore } from '@reduxjs/toolkit'

import globalReducer from './reducers/global.reducer'
import rulesReducer from './reducers/rules.reducer'
import socketReducer from './reducers/socket.reducer'
import lobbiesReducer from './reducers/lobbies.reducer'
import { baseApi } from '@/services/base.api'
import { videosdkApi } from '@/services/videosdk/videosdk'

const rootReducer = combineReducers({
  global: globalReducer,
  rules: rulesReducer,
  socket: socketReducer,
  lobbies: lobbiesReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [videosdkApi.reducerPath]: videosdkApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(baseApi.middleware, videosdkApi.middleware),
})

export type StateType = ReturnType<typeof store.getState>
