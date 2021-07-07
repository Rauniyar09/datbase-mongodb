import React, { Component } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Error from './components/Error';
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx'
import Logout from './components/Logout'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register';
import Dashboard from './components/Dashboard';

class TodoApp extends Component {
    render() { 
        return ( 
            <div>
                
                <Router>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/register" exact component={Register}/> 
                        <AuthenticatedRoute path="/welcome/:name" exact component={Home}/>
                        <AuthenticatedRoute path="/dash" exact component={Dashboard}/>
                        <Route path='/logout' exact component={Logout}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer></Footer>
                </Router>
            </div>
         );
    }
}
 
export default TodoApp;