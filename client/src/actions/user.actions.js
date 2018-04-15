import axios from 'axios'

// USER ACTIONS

export function allUsers(returnUsers) {
  return {type: 'GET_USER_DATA', returnUsers}
}

export function userPath(i) {
  return function(dispatch) {
    return axios.get('/api/users').then((response) => {
      dispatch(allUsers(response.data))
    })
  }
}
//// get function for users
export function newUser(newUserInfo) {
  return {type: 'CREATE_NEW_USER', newUserInfo}
}

export function saveNewUser(saveNewUserInfo) {
  return function(dispatch) {
    return axios.get('/api/users', saveNewUserInfo).then((response) => {
      dispatch(newUser(response.data))
    })
  }
}
///post function for users
export function getSingleUser(returnUser) {
  return {type: 'GET_SINGLE_USER_DATA', returnUser}
}

export function singleUserPath(userId) {
  return function(dispatch) {
    return axios.post(`/api/users/${userId}`).then((response) => {
      dispatch(getSingleUser(response.data))
    })
  }
}
//get function to get info from the post
export function editUser(editUserInfo) {
  console.log(editUserInfo)
  return {type: 'EDIT_USER_INFO', editUserInfo}
}

export function saveEditUser(saveEditUserInfo) {
  console.log(saveEditUserInfo)
  return function(dispatch) {
    return axios.put(`/api/users/${saveEditUserInfo}`, saveEditUserInfo).then((response) => {
      dispatch(editUser(saveEditUserInfo))
    })
  }
}

export function deleteUser(deleteUserId) {
  return {type: 'DELETE_USER', deleteUserId}
}

export function killUser(removeUser) {
  console.log(removeUser)
  return function(dispatch) {
    return axios.delete(`/api/users/${removeUser.id}`).then((response) => {
      dispatch(deleteUser(removeUser.id))
    })
  }
}
