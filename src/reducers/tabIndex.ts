import { SET_TAB_INDEX } from '../constants/tabIndex';

const INITIAL_STATE = {
  tabIndex: 0,
}

export default function tabIndex(state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case SET_TAB_INDEX:
      return {
        ...state,
        tabIndex: action.payload,
      }
    default:
      return state
  }
}