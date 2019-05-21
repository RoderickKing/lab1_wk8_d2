const spendingReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      const newState = [ ...state, action.transaction ]
      return newState;
    case 'CLEAR_TRANSACTION':
      const clearState = []
      return clearState;
    default:
      return state;
  }
}

export default spendingReducer;
