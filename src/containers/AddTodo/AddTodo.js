import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { InputGroup, FormGroup, FormControl } from 'react-bootstrap'

import { createTodo } from '../../actions/todos'

class AddTodo extends Component {
  constructor () {
    super()

    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onKeyUp (e) {
    console.log(e.keyCode)
    if (e.keyCode === 13) {
      this.props.dispatch(createTodo(e.target.value))
      e.target.value = ''
    }
  }

  render () {
    return (
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>Todo</InputGroup.Addon>
          <FormControl type="text" onKeyUp={this.onKeyUp} />
        </InputGroup>
      </FormGroup>
    )
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(AddTodo)
