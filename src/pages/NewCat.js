import React, {Component} from 'react'
import {Panel, ControlLabel, FormGroup, FormControl} from 'react-bootstrap'

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
    this.props.handleNew(this.state.form)
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <Panel id="create-cat-form">
          <form>
            <FormGroup>
              <ControlLabel id="name">Cat Name: </ControlLabel>
              <FormControl
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.name} /><br />
              <ControlLabel id="age">Age: </ControlLabel>
              <FormControl
                type="number"
                name="age"
                placeholder="Age"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age} /><br />
              <ControlLabel id="enjoys">Enjoys: </ControlLabel>
              <FormControl
                type="text"
                name="enjoys"
                placeholder="Enjoys"
                onChange={this.handleChange.bind(this)} value={this.state.form.enjoys} /> <br />
              <FormControl
                type="submit"
                name="enjoys"
                id="submit"
                onClick={this.handleSubmit.bind(this)}
                value="Create Cat Profile" />
              </FormGroup>
          </form>
        </Panel>
      </div>
    )
  }
}

export default NewCat
