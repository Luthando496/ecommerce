
import './App.css';
import React from 'react'
import HomePage from './Components/HomePage/HomePage.jsx';
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Components/Shop/Shop.js';


const App = (props) => {
  
  return (
    <div>
     
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>    
    </div>
  )
}







export default App