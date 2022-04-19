import { Action } from '@/components/Main/Main.styles'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  AnchorType,
  sortByAnchorId,
} from '../../components/Rules/helpers/anchors'

type InitialStateType = {
  anchors: AnchorType[] | []
}

const initialState: InitialStateType = {
  anchors: [],
}

const rulesReducer = createSlice({
  name: 'rules',
  initialState,
  reducers: {
    addVisibleAnchor(
      state: InitialStateType,
      action: PayloadAction<AnchorType>
    ) {
      return {
        ...state,
        anchors: sortByAnchorId([
          ...new Set([...state.anchors, action.payload]),
        ]),
      }
    },
    removeUnvisibleAnchor(
      state: InitialStateType,
      action: PayloadAction<AnchorType>
    ) {
      return {
        ...state,
        anchors: state.anchors.filter(
          (anchor: AnchorType) => anchor !== action.payload
        ),
      }
    },
    clearAnchors(state: InitialStateType, action: PayloadAction<AnchorType>) {
      return {
        ...state,
        anchors: [action.payload, ...state.anchors].filter(
          (anchor: AnchorType) => anchor === action.payload
        ),
      }
    },
  },
})

export const { addVisibleAnchor, removeUnvisibleAnchor, clearAnchors } =
  rulesReducer.actions
export default rulesReducer.reducer
