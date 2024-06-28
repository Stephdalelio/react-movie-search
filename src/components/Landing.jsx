import React from 'react'
import Undrawmovie from '../assets/undraw_horror_movie_3988.svg';
import Searchbar from '../components/Searchbar';

const Landing = () => {
    return (
        <section id="landing" className="landing">
          <div className="row landing_row">
            <div className="container landing__container">
              <div className="landing__description">
                <h1 className="landing__description--h1">
                  Have a Movie <span className="red">Night</span>
                </h1>
                <h2 className="landing__description--h2">What do you like to watch?</h2>
                <Searchbar />
              </div>
              <figure className="undraw__img--wrapper">
                <img className="undraw__img" src={Undrawmovie} alt="" />
              </figure>
            </div>
          </div>
        </section>
      );
    };
  

export default Landing;
