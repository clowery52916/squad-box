function facialApiReducer(state = [], action) {

  switch (action.type) {

    case 'GET_FACIAL_DATA':
      return [...action.returnFacialApis]

    case 'GET_SINGLE_FACIAL_DATA':
      return [...action.returnFacialApi]

    case 'CREATE_NEW_FACIAL':
      return [
        ...state,
        action.newFacialApiInfo
      ]

    case 'EDIT_FACIAL_INFO':
      return updateFacialApiInfo(state, action)

    case 'DELETE_FACIAL':
      return state.filter(user => user.id !== action.deleteFacialApiById)

    default:
      return state
  }
}

function updateFacialApiInfo(state, action) {
  return state.map((user) => {
    if (user.id !== action.editFacialApi.id) {
      return user
    }
    return {
      ...user,
      ...action.editFacialApi
    }
  })
}

export default facialApiReducer
