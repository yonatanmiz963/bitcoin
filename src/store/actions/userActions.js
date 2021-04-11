
import { userService } from '../../services/userService'

export function loadUser() {
  return async dispatch => {
    const user = await userService.getUser()
    const action = {
      type: 'SET_USER',
      user
    }
    dispatch(action)
  }
}

export function signUp(newUser) {
  return async dispatch => {
    const user = await userService.signUp(newUser)
    const action = {
      type: 'SET_USER',
      user
    }
    dispatch(action)
    return user
  }
}


export function addMove(move) {
  return async (dispatch, getState) => {
    try {
      const user = getState().userReducer.user
      if (user.balance < move.amount) throw new Error('Transaction wasn\'t made, please try again.')
      move.at = new Date()
      await userService.addMove(move)
      dispatch({ type: 'ADD_MOVE', move })
      dispatch({ type: 'SPEND_BALANCE', spendAmount: move.amount })
      return user

    } catch (err) {
      console.log('err:', err)
      throw err
    }
  }
}

