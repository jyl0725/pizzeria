import React from 'react';
import PizzaAPI from '../../PizzaAPI';

const PizzaCard = (props) => {

  const getPizzaInfo = () => {
    const pizza = PizzaAPI.get(parseInt(props.match.params.id));
    return (
      <div>
        <h2>{pizza.name} </h2>
        <img src={pizza.pizzaImage} alt={pizza.name} width={400} height = {400} />
        <p> {pizza.description} </p>
      </div>
    )
  }


  return(
    <div>
    {props.match ? getPizzaInfo() : <h2>Finding Pizzas </h2>}
    </div>
  )
};

export default PizzaCard;
