import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'

class Header extends Component{
  render(){
    return(
      <div>
        <Navbar>
          <Navbar.Header>
            <h1>Cat Tinder</h1>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default Header
