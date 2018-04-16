import uuid from 'uuid'

export function  incrementComment (index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
export function addComment (user) {
  return {
    type: 'ADD_COMMENT',
    comment: {
      id: uuid(),
      user: user,
      likes: false
    }
  }
}

export function editComment (id, user) {
  return {
    type: 'EDIT_COMMENT',
    id,
    user
  }
}

export function toggleComment (id) {
  return {
    type: 'TOGGLE_COMMENT',
    id
  }
}

export function deleteComment (id) {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}
