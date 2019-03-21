import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import './Home.css';

const Home = () => {
  return(
    <div className='home'>
      <section>
        <h2 className='Welcome'>Welcome to Hunter Digital Pizza</h2>
        <p>Please Click on Menu to see options </p>
      </section>
    </div>
  )
}

export default Home
