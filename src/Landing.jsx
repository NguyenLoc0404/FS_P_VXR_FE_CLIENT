import React from "react";
import Cover from "./components/content/cover";
import Station from "./components/stations";
import Trip from './components/trips';
import Info from "./components/content/info"
import Categories from "./components/content/categories";
import Recommendations from "./components/content/recommendations";
import Footer from "./components/content/footer";
import { connect } from "react-redux";


const Landing = () => {

  return (
    <div>
      <Cover />
      <Info/>
      <Station/>
      <Trip />
      <Categories/>
      <Recommendations/>
      <Footer/>
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, null)(Landing);
