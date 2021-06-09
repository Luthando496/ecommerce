
import './App.css';
import React from 'react'
import HomePage from './Components/HomePage/HomePage.jsx';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Components/Shop/Shop.js';
import Header from './Components/Header/Header'


const App = (props) => {
  
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>    
    </div>
  )
}







export default App