export const defaultState = [
  {
    id: 0,
    task: 'I love this picture of you!',
    completed: false
  },
  {
    id: 1,
    task: 'You look beautiful',
    completed: false
  },
  {
    id: 2,
    task: 'Yeeessss!! We need to go to a movie',
    completed: true
  }
]

function comments (state = defaultState, action) {
  switch (action.type) {
    case 'EDIT_COMMENT':
      return state.map(comment => {
        if (comment.id === action.id) {
          comment.task = action.task
        }
        return comment
      })

    case 'TOGGLE_COMMENT':

      // state is the current amount of comments
      // all objects with an id, task, and completed
      // find a specific object, and update completed value
      // return new array

      // return state.map((comment) => {
      //   if (comment.id === action.id) {
      //     comment.completed = !comment.completed
      //   }
      //   return comment
      // })

      const newState = [ ...state ]
      const commentToChange = newState.find(comment => comment.id === action.id)
      commentToChange.completed = !commentToChange.completed
      return newState


    case 'ADD_COMMENT':

      // When this is called.
      // return all existing comments
      // with addition of new comment
      return [ ...state, action.comment ]

    case 'DELETE_COMMENT':
      return state.filter(comment => {
        return comment.id !== action.id
      })
    default:
      return state
  }
}

export default comments
