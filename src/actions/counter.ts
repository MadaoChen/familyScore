import { ADD, MINUS } from '../constants/counter'

export const add = () => {
  return {
    type: ADD,
  }
}
export const minus = () => {
  return {
    type: MINUS,
  }
}

// 异步的 action
export function asyncAdd() {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}