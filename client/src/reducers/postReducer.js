export const defaultState = [
  {
    userId: 0,
    id: 0,
    comment: 'I love this picture of you!',
    completed: false
  },
  {
    id: 1,
    comment: 'You look beautiful',
    completed: false
  },
  {
    id: 2,
    comment: 'Yeeessss!! We need to go to a movie',
    completed: true
  }
]

function posts (state = defaultState, action) {
  switch (action.type) {
    case 'EDIT_POST':
      return state.map(post => {
        if (post.id === action.id) {
          post.task = action.task
        }
        return post
      })

    case 'TOGGLE_POST':

      // state is the current amount of posts
      // all objects with an id, task, and completed
      // find a specific object, and update completed value
      // return new array

      // return state.map((post) => {
      //   if (post.id === action.id) {
      //     post.completed = !post.completed
      //   }
      //   return post
      // })

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

export default posts
