import React, {Component} from 'react';

import PizzaList from '../../components/presentational/PizzaList';
import PizzaAPI from '../../PizzaAPI';
import './Pizzeria.css';

class Pizzeria extends Component {
  state ={
    menu: [],
    pizza: {}
  };

  componentDidMount(){
    const pizzas = PizzaAPI.all();
    this.setState({
      menu: pizzas
    })
  }

  createPizzaList = () => {
    return this.state.menu.map(pizza => (
      <PizzaList
        id = {pizza.id}
        name = {pizza.name}
        pizzaImage = {pizza.pizzaImage}
        key = {pizza.id}
        handleImageClick={this.handleImageClick}
        />
    ))
  }

  handleImageClick = (id) => {
    let clickedPizza = this.state.menu.filter(pizza => pizza.id === id);
    this.setState({
      pizza: clickedPizza
    }, () => console.log(this.state.pizza))
  }





  render(){
    return(
      <div className='pizzas-container'>
        {this.state.menu ? this.createPizzaList() : <h2>Loading</h2>}
      </div>
    );
  };
}


export default Pizzeria;
