import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    render() { 
        return ( 
            <div>
               <h3>Welcome to The  Applicaiton. To Manage Your DashBoard <Link to='/dash'>Click Here</Link></h3>
            </div>
         );
    }
}
 
export default Welcome;