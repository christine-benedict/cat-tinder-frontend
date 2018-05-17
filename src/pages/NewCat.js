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
    this.setState({form})
  }

  render(){
    return(
      <form>
        <FormGroup>
          <ControlLabel>Cat Name: </ControlLabel>
          <FormControl type="text" name="name" value={this.state.form.name} />
          <ControlLabel>Age: </ControlLabel>
          <FormControl type="number" name="age" value={this.state.form.age} />
          <ControlLabel>Enjoys: </ControlLabel>
          <FormControl type="text" name="enjoys" value={this.state.form.enjoys} />
          <FormControl type="submit" name="enjoys" onClick={this.handleChange.bind(this)} value="Add New Cat" />
        </FormGroup>
      </form>
    )
  }
}

export default NewCat
