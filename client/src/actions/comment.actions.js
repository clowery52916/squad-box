import uuid from 'uuid'


export function addComment (user) {
  return {
    type: 'ADD_COMMENT',
    todo: {
      id: uuid(),
      user: user,
      completed: false
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
