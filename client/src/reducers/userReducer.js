function userReducer(state = [], action, globalState) {

  switch (action.type) {

    case 'GET_USER_DATA':
      return [...action.returnUsers]

    case 'GET_SINGLE_USER_DATA':
      return [...state, action.returnUser]

    case 'CREATE_NEW_USER':
      return [
        ...state,
        action.newUserInfo
      ]

    case 'EDIT_USER_INFO':
      return updateUserInfo(state, action)

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload.deleteUserById)
        default:
          return state;
  }
}

function updateUserInfo(state: action) {
  return state.map((user) => {
    if (user.id !== action.editUserInfo.id) {
      return user
    }
    return {
      ...user,
      ...action.editUserInfo
    }
  })
}

export default userReducer
