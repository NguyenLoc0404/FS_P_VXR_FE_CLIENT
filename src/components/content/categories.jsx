import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faCreditCard,
    faAnchor,
    faAngleDown 
} 
    
    from '@fortawesome/free-solid-svg-icons';

{/* <FontAwesomeIcon icon={faShoppingCart} size="lg" /> */}
const categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <h5 className="fw-medium mb-3">Top categories</h5>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAddressCard} size="lg" />
          &nbsp; &nbsp; Development
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faCreditCard} size="lg" />
          &nbsp; &nbsp; Business
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAnchor} size="lg" />
          &nbsp; &nbsp; IT and Software
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
          &nbsp; &nbsp; Design
        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAngleDown} size="lg" />
          &nbsp; &nbsp; Sale
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAnchor} size="lg" />
          &nbsp; &nbsp; Connect Faster
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faCreditCard} size="lg" />
          &nbsp; &nbsp; Support
        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-xs-12 mb-3">
                        <div className="p-3 categories-item d-flex align-items-center">
                        <FontAwesomeIcon icon={faAddressCard} size="lg" />
          &nbsp; &nbsp; Ask And Questions
        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default categories;