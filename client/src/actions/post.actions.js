import uuid from 'uuid'

export function incrementPost (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
export function getPost (user) {
  return {
    type: 'GET_POST',
    post: {
      id: uuid(),
      user: user,
      likes: false
    }
  }
}

export function editPost (id, user) {
  return {
    type: 'EDIT_POST',
    id,
    user
  }
}

export function editToggle (id) {
  return {
    type: 'EDIT_TOGGLE',
    id
  }
}
export function deleteToggle (id) {
  return {
    type: 'DELETE_TOGGLE',
    id
  }
}
export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}
