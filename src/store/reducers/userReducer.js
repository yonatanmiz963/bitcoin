const INITIAL_STATE = {
  user: null
}

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'ADD_MOVE':
      return {
        ...state,
        user: { ...state.user, moves: [...state.user.moves, action.move] }
      }
    case 'SPEND_BALANCE':
      return {
        ...state,
        user: { ...state.user, balance: state.user.balance - action.spendAmount }
      }
    default:
      return state
  }
}