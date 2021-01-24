import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Dashboard from "./secure/Dashboard";
import Users from "./secure/Users";

function App() {
    return (
        <>
            <BrowserRouter>
                <Route path={"/"} exact component={Dashboard} />
                <Route path={"/user"}  component={Users} />
            </BrowserRouter>
        </>
    );
}

export default App;
