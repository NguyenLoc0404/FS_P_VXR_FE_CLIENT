import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Station from './components/stations';
import Trip from './components/trips';



function App() {
  const name = "cybersoft";
  const display = true;
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1>hello react</h1>
      <h4>hello {name}</h4>
      <p>Age: {2020 - 1990}</p>
      <p>{display ? "in gia tri" : "Khong in"}</p> */}

        <Navbar />
        <Cover />
        <Station />
        <Trip />
        {/* <h3 style={{backgroundColor:"yellow"}}>ahihi</h3> */}
         <Switch>
         <Route path='/auth/Login.jsx' exact component={Login} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
