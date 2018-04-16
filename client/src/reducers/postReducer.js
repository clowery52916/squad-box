

function posts (state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating
      ]
    default:
      return state;
  }


function editTodo (state, action) {
  switch (action.type) {
    case 'EDIT_TODO':
      return state.map(post => {
        if (post.id === action.id) {
          post.likes = action.likes
        }
        return post
      })

    case 'TOGGLE_POST':

      const newState = [ ...state ]
      const postToChange = newState.find(post => post.id === action.id)
      postToChange.completed = !postToChange.completed
      return newState


    case 'ADD_POST':

      // When this is called.
      // return all existing posts
      // with addition of new post
      return [ ...state, action.post ]

    case 'DELETE_POST':
      return state.filter(post => {
        return post.id !== action.id
      })
    default:
      return state
  }
}

}

export default posts;
