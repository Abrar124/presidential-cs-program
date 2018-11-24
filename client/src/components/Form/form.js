import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/form'>Forms</Link></li>
                    <li><Link to='/ai'>Ai</Link></li>
                    <li><Link to='/cloudnative'>cloudNative</Link></li>
                </ul>

                <h1>
                    This is form page
          </h1>
            </div>
        );
    }
}

export default Form;
