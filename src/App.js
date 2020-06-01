import React from "react";
import "./App.css";
import _ from "lodash";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from "./components/cart";
// import api from "./api";

import Login from "./components/auth/Login";
import Landing from "./Landing";

import CreateUser from "./components/users/CreateUser";
import User from "./components/users";
import UpdateUser from "./components/users/UpdateUser";
import UpdatePassword from "./components/users/UpdatePassword";
import UploadAvatar from "./components/users/UploadAvatar";
import Search from './components/search';

import loginRequest from "./components/loginRequest";

import checkTokenValid from "./components/ultils/checkTokenValid";
import { connect } from "react-redux";
import { setCurrentUser } from "./actions/auth";
// import { setCart } from "./actions/auth";
// import setHeader from "./components/ultils/setHeader";

function App(props) {
  // const name = "cybersoft";
  // const display = true;

  React.useEffect(() => {
    console.log("use efffect app");
    let decode = checkTokenValid();
    console.log(decode);
    if (!_.isEmpty(decode)) {
      const { decoded, token } = decode;
      console.log(token);
      console.log(decoded);

      if (decoded) {
        props.setCurrentUser(decoded);
        // api .get(`/tickets/all/${decoded._id}`)
        //   .then((res) => {
        //     if (res) {
        //       props.setCart(res.data);
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      };
      //setHeader(token);


    }
  }, []);

  const { auth } = props;
  const { isAuthenticated } = auth;
  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact
            // component={Login}

            render={(props) => {
              if (isAuthenticated) return <Redirect to="/landing" />
              //props chứa đầy đủ history , map , location
              return <Login {...props} />
            }}
          />
          
          <Route path='/landing' exact component={Landing} />
          <Route path='/auth/Login' exact component={Login} />
          <Route path='/users/CreateUser' exact component={CreateUser} />
          <Route path='/users/:userId' exact component={User} />
          <Route path='/users/update-user/:userId' exact component={UpdateUser} />
          <Route path='/users/update-password/:userId' exact component={UpdatePassword} />
          <Route path='/users/update-avatar/:userId' exact component={UploadAvatar} />
          <Route path='/users/:userId/cart' exact component={Cart} />
          <Route path='/loginR' exact component={loginRequest} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/booking/:content' exact component={Search} />
          <Route path='/' component={() => <h2>Page Not Found</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToprops = (dispatch) => {
  return {
    setCurrentUser: (decoded) => {
      dispatch(setCurrentUser(decoded))
    },
  }
}
export default
  connect(
    mapStateToProps,
    mapDispatchToprops
  )
    (App);

