import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./secure/dashboard/Dashboard";
import Users from "./secure/users/Users";
import Login from "./public/Login";
import Register from "./public/Register";
import Create from "./secure/users/Create";

function App() {
  return (
      <>
        <BrowserRouter>
          <Route path={"/"} exact component={Dashboard}/>
          <Route path={"/users"} exact component={Users}/>
          <Route path={"/users/create"} exact component={Create}/>
          <Route path={"/users/:id/edit"} exact component={Create}/>
          <Route path={"/login"} component={Login}/>
          <Route path={"/register"} component={Register}/>
        </BrowserRouter>
      </>
  );
}

export default App;
