import React, { Component } from 'react';
import UserService from '../service/UserService.js';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : "",
            email : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.registerClicked = this.registerClicked.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    registerClicked(event){
        event.preventDefault();
        UserService.saveUser(this.state);
        this.props.history.push("/");
    }

    render() { 
        return ( 
        <div> 
            <div className='container float-left'>
                <form onSubmit={this.registerClicked}>
                <div className="form-group">
                    User Name :
                    <input type="text" className="form-control" id="name" name='name' placeholder="Enter Username" onChange={this.handleChange} required/>  
                </div>
                <div className="form-group">
                    Email :
                    <input type="email" className="form-control" id="email" name='email' placeholder="Enter Email" onChange={this.handleChange}/>  
                </div>
                <div className="form-group">
                    Password
                    <input type="password" className="form-control" id="password" name='password' placeholder="Password" minLength="6" onChange={this.handleChange}/>
                </div>
                <button type = "submit" className="btn btn-success m-2" >Register</button>
            </form>
            </div>
        </div> );
    }
}
 
export default Register;