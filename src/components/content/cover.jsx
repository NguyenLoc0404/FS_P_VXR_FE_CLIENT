import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleRight  
} from '@fortawesome/free-solid-svg-icons';

 

const Cover = () => {
  return (
    <section className="carousel">
      <div className="container">
        <div className="carousel__content">
          <h1>More than a buy ticket</h1>
          <p>
            Join the Best to find Cheapest Ticket. Ticket from $2 ends today, 11:59
            p.m. PDT!
      </p>
          <form className="search-bar">
            <input type="text"  placeholder="Tỉnh/TP đi" />
            <input type="text"  placeholder="Tỉnh/TP đến" />
            <button className="search__btn">
            <FontAwesomeIcon icon={faAngleDoubleRight } size="lg" /> 
            </button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Cover;
