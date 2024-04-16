import { SET_TAB_INDEX } from '../constants/tabIndex';

export function setTabIndex(dispatch:any) {
  return (value: number) => {
    const action  = {
      type: SET_TAB_INDEX,
      payload: value,
    }
    dispatch(action)
  }
}