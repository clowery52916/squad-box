function userReducer(state = [], action) {
  switch (action.type){
    case 'GET_USERS':
    return [...action.user]
  }
}
