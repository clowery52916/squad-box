export const defaultState = [
  {
    id: 0,
    body: 'Test this post Page',
    completed: true
  },
  {
    id: 1,
    body: 'yeha yeah yeah ',
    completed: true
  },
  {
    id: 2,
    body: 'love ur hair',
    completed: true
  }
]

function posts (state = defaultState, action) {
  switch (action.type) {
    case 'EDIT_POST':
      return state.map(post => {
        if (post.id === action.id) {
          post.body = action.body
        }
        return post
      })

    case 'TOGGLE_POST':

      // state is the current amount of posts
      // all objects with an id, body, and completed
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
