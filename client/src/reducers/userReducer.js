function userReducer(state = [], action) {

  switch (action.type) {

    case 'GET_USER_DATA':
      return [...action.returnUsers]

    case 'GET_SINGLE_USER_DATA':
      return [...action.returnUser]

    case 'CREATE_NEW_USER':
      return [
        ...state,
        action.newUserInfo
      ]

    case 'EDIT_USER_INFO':
      return updateUserInfo(state, action)

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.deleteUserById)

    default:
      return state
  }
}

function updateUserInfo(state, action) {
  return state.map((user) => {
    if (user.id !== action.editUser.id) {
      return user
    }
    return {
      ...user,
      ...action.editUser
    }
  })
}

export default userReducer
