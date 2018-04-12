import React from 'react'
import { connect } from 'react-redux'
import { showAll, showCompleted, showCurrent } from '../actions/visibility.actions'

const VisibilityButtons = (props) => {
  return (
    <div>
      <button onClick={props.showAll}>Show All</button>
      <button onClick={props.showCompleted}>Show Complete</button>
      <button onClick={props.showCurrent}>Show Current</button>
    </div>
  )
}

export default connect(null, { showAll, showCompleted, showCurrent })(VisibilityButtons)
