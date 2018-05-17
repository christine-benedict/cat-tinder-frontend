import React, {Component} from 'react'
import {ControlLabel, FormGroup, FormControl} from 'react-bootstrap'

class NewCat extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }
  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit(event){
    this.props.handleNewCat(this.state.form)
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <form>
            <ControlLabel id="name">Cat Name: </ControlLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name} />
            <ControlLabel id="age">Age: </ControlLabel>
            <FormControl
              type="number"
              name="age"
              placeholder="Age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age} />
            <ControlLabel id="enjoys">Enjoys: </ControlLabel>
            <FormControl
              type="text"
              name="enjoys"
              placeholder="Enjoys"
              onChange={this.handleChange.bind(this)} value={this.state.form.enjoys} />
            <FormControl
              type="submit"
              name="enjoys"
              id="submit"
              onClick={this.handleSubmit.bind(this)}
              value="Create Cat Profile" />
        </form>
      </div>
    )
  }
}

export default NewCat
