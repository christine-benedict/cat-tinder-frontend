import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './components/Header'
import { getCats, createCat } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [],
      newCatSuccess: false
    }
  }

  componentWillMount(){
    getCats().then( APIcats => {
      this.setState( {cats: APIcats} )
    })
  }

  handleCat(data){
    createCat(data).then( successCat => {
      console.log("SUCCESS! New cat:", successCat)
      getCats().then( APIcats => {
          this.setState({cats:APIcats, newCatSuccess: true})
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Header /><br />
        <Router>
          <Switch>
            <Route exact path="/cats" render={ (props) => <Cats cats={this.state.cats} />} />
            <Route exact path="/" render={ (props) => <NewCat handleNew={this.handleCat.bind(this)} success={this.state.newCatSuccess} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
