function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0, i), { // before the one we are updating
          ...state[i],
          likes: state[i].likes + 1
        },
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }

  switch (action.type) {

    case 'GET_POST':
      return [action.getPost]

    case 'GET_SINGLE_POST':
      return [
        ...state,
        action.getOnePost
      ]

    case 'ADD_POST':
      return [
        ...state,
        action.addPost
      ]

      switch (action.type) {
        case 'EDIT_POST':
          return state.map(post => {
            if (post.id === action.id) {
              post.user = action.user
            }
            return post
          })

        case 'TOGGLE_EDIT':

          const newState = [...state]
          const postToChange = newState.find(post => post.id === action.id)
          postToChange.completed = !postToChange.completed
          return newState

        case 'DELETE_TOGGLE':
          return state.filter(post => post.id !== action.deletePost)

        default:
          return state
      }
  }

  function updatePost(state : action, savePost) {
    return state.map((post) => {
      if (post.id !== action.savePost.id) {
        return post
      }
      return {
        ...post,
        ...action.editPost
      }
    })
  }
}
