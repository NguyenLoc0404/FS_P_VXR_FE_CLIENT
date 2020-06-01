import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faCreditCard,
  faAnchor,
  faAngleDown
}

  from '@fortawesome/free-solid-svg-icons';
const recommendations = () => {
  return (
    <section className="recommendations">
      <div className="recommendations__border--top" />
      <div className="recommendations__wrapper">
        <div className="container py-4">
          <div className="d-none d-xl-block mb-5">
            <div className="row __icon =">
              <div className="col text-center">
                <FontAwesomeIcon icon={faAddressCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
              </div>
              <div className="col text-center">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAnchor} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAngleDown} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
              </div>
            </div>
            <div className="row __icon mb-xl-5">
              <div className="col-xl-3 d-none d-xl-block text-right align-self-center pr-4">
                <FontAwesomeIcon icon={faAddressCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
              </div>
              <div className="col-xl-6 col-md-12 text-center text-white">
                <h3>Get personalized recommendations</h3>
                <p>Answer a few questions for your top picks</p>
                <button className="btn bg--red text-white">Get started</button>
              </div>
              <div className="col-xl-3 d-none d-xl-block text-left align-self-center pl-4">
                <FontAwesomeIcon icon={faCreditCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
              </div>
            </div>
            <div className="d-none d-xl-block">
              <div className="row __icon">
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAnchor} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAnchor} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
                <div className="col text-center">
                  <FontAwesomeIcon icon={faCreditCard} size="lg" style={{fontSize: 30, color: '#686f7a'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>


  );
};

export default recommendations;