import uuid from 'uuid'

export function addPost (comment) {
  return {
    type: 'ADD_POST',
    todo: {
      id: uuid(),
      comment: comment,
      completed: false
    }
  }
}

export function editPost (id, comment) {
  return {
    type: 'EDIT_POST',
    id,
    comment
  }
}

export function togglePost (id) {
  return {
    type: 'TOGGLE_POST',
    id
  }
}

export function deletePost (id) {
  return {
    type: 'DELETE_POST',
    id
  }
}
