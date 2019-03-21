import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home';
import PizzaCard from './PizzaCard';
import Pizzeria from '../../components/containers/Pizzeria';
import './NavBar.css';

const NavBar = () => {

  return (
    <>
      <nav>
      <ul>
        <li><h1>Pizzeria</h1></li>
        <li><NavLink to = '/' className='link'> Home</NavLink></li>
        <li><NavLink to = '/pizzas'className='link'> Menu</NavLink></li>
      </ul>
      </nav>
      <Switch>
        <Route exact path = '/' component={Home} />
        <Route path='/pizzas/:id' component={PizzaCard}/>
        <Route path ='/pizzas' component={Pizzeria} />
      </Switch>
    </>
  )
}

export default NavBar
