const getAllIds = gState => Object.keys(gState);

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
      return updateUserPost(state, action.payload.editPost)

    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload.deleteUserById)

      case 'ADD_ALL_ITEMS':
          return getAllIds(globalState);
        //  remove all displayed items
        case 'REMOVE_ALL_ITEMS':
          return [];
        default:
          return state;
  }
}

function updateUserPost(state: action, saveEditedPost) {
  return state.map((user) => {
    if (user.id !== action.saveEditedPost.id) {
      return user
    }
    return {
      ...user,
      ...action.editPost
    }
  })
}

export default userReducer
