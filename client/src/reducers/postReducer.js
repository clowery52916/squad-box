function postReducer(state = [], action) {

  switch (action.type) {

    case 'GET_POST_DATA':
      return [...action.returnPosts]

    case 'GET_SINGLE_POST_DATA':
      return [...action.returnPost]

    case 'CREATE_NEW_POST':
      return [
        ...state,
        action.newPostInfo
      ]

    case 'EDIT_POST_INFO':
      return updatePostInfo(state, action)

    case 'DELETE_POST':
      return state.filter(post => post.id !== action.deletePostById)

    default:
      return state
  }
}

function updatePostInfo(state, action) {
  return state.map((post) => {
    if (post.id !== action.editPost.id) {
      return post
    }
    return {
      ...post,
      ...action.editPost
    }
  })
}

export default postReducer
