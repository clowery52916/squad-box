import uuid from 'uuid'

export function incrementPost (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
export function addPost (id) {
  return {
    type: 'ADD_POST',
    post: {
      body:'',

    },
    likes: false
  }
}

export function editPost (id) {
  return {
    type: 'EDIT_POST',
    id,

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
