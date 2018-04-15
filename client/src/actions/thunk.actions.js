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


export function getSingleUser(user) {
  return {type: 'GET_ONE_USER', user}
}

export function getSingleUserRoute(userId) {
  return function (dispatch) {
    return axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        dispatch(getSingleUser(response.data))
      })
  }
}



export function editUser(editedUserData) {
  console.log(editedUserData)
  return {type: 'EDIT_USER', editedUserData}
}

export function updateUserInfo(editUser) {
  console.log(editUser)
  return function (dispatch) {
    return axios
      .patch(`/api/users/${editUser.id}`, editUser)
      .then((response) => {
        dispatch(editUser(editUser))
      })
  }
}

export function deleteUser(userToDeleteId) {
  return {type: 'DELETE_USER', userToDeleteId}
}

export function deleteUserHistory(deleteUserById) {
  console.log(deleteUserById)
  return function (dispatch) {
    return axios
      .delete(`/api/users/${deleteUserById.id}`)
      .then((response) => {
        dispatch(deleteUser(deleteUserById.id))
      })
  }
}
