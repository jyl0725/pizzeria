import React from 'react';
import { Link } from 'react-router-dom';

import './PizzaList.css'

const PizzaList = ({pizzaImage, name, findPizza, id, handleImageClick}) => {
  return(

      <div className='pizza-containers'>
        <h2>{name}</h2>
        <Link to={`/pizzas/${id}`}><img src={pizzaImage} alt={name} height={100} width={100} /></Link>
      </div>

  )
}

export default PizzaList
