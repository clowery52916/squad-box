const defaultState = 'SHOW_ALL'

function visiblity (state = defaultState, action) {
  switch (action.type) {
    case 'SHOW_ALL':
      return action.type
    case 'SHOW_COMPLETED':
      return action.type
    case 'SHOW_CURRENT':
      return action.type
    default:
      return state
  }
}

export default visiblity
