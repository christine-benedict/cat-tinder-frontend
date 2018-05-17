import React, { Component } from 'react'
import {Navbar, NavItem} from 'react-bootstrap'

class Header extends Component{
  render(){
    return(
      <div id="navbar">
        <Navbar>
          <Navbar.Header>
            <h1>Cat Tinder</h1> <hr />
            <img id="cat-header" src="../images/cat.jpg"/>
          </Navbar.Header>
          <NavItem eventKey="cat-index-link" href="/cats">See all cats</NavItem>
          <NavItem eventKey="cat-create-link" href="/">Create new profile</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default Header
