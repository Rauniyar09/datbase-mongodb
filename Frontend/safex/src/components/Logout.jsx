import React, { Component } from 'react'

class Logout extends Component {

    componentDidMount(){
        setTimeout(() => { 
            this.props.history.push('/');
        }, 3000)
    }
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

export default Logout