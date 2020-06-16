import React, { Component } from 'react';
import { Link } from "react-router-dom";
class loginRequest extends Component {
    render() {
        return (
            <section className="loginR">
      <div className="container">
        <div className="carousel__content">
          <h1 className="text-dark">Register Now To Connect With VEXERE</h1>
          <p className="text-dark">
            Join the Best to find Cheapest Ticket. And Sale Everyday
      </p>
          <form className="search-bar">
            <Link to="/auth/Login" type="button" className="btn btn-primary ">Đăng Nhập</Link><br />
            <Link to="/users/CreateUser" type="button" className="btn btn-success mt-2">  Đăng Ký  </Link>
          </form>
        </div>
      </div>
    </section>
        );
    }
}

export default loginRequest;

