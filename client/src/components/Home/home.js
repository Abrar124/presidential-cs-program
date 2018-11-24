import React, { Component } from 'react';
import AuthMiddleware from '../../store/middleware/authMiddleware';
import { connect } from 'react-redux';


class Home extends Component {
    
    render() {
        return (
            <div>
                Hello Home
            </div>
        );
    }
}

export default Home;