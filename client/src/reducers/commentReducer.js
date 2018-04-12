function commentReducer(state = [], action) {

  switch (action.type) {

    case 'GET_COMMENT_DATA':
      return [...action.returnComments]

    case 'GET_SINGLE_COMMENT_DATA':
      return [...action.returnComment]

    case 'CREATE_NEW_COMMENT':
      return [
        ...state,
        action.newCommentInfo
      ]

    case 'EDIT_COMMENT_INFO':
      return updateCommentInfo(state, action)

    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.deleteCommentById)

    default:
      return state
  }
}

function updateCommentInfo(state, action) {
  return state.map((comment) => {
    if (comment.id !== action.editComment.id) {
      return comment
    }
    return {
      ...comment,
      ...action.editComment
    }
  })
}

export default commentReducer
