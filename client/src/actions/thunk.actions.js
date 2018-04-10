import axios from 'axios'

export function getUsers(users) {
  return {type: 'GET_USERS', users}
}

export function getUserRoute() {
  return function (dispatch) {
    return axios
      .get('/api/users')
      .then((response) => {
        dispatch(getUsers(response.data))
      })
  }
}
//this will be called inside the UserComponent
