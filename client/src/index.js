import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import Webcam from 'react-webcam'

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()


///thunk will be in actions and will have a pair of actions that will need to be called in the action
///import in the actions i want in my user page component - and then export it as well
//look up push - specific for redux
//import and connect in components (dispatch state to props and you can make multiple calls within the function - redux connect!
//export default map state to props - connect (compnent name))- call in the action in your component (api call)
//only place i will call thunk will be in the store when i apply the middleware, i will spread and then ...[thunk]
