import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Form from './components/Form/form';
import CloudNative from './components/CloudNative/cloudNative';
import Ai from './components/Ai/ai';


import history from './History';

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                   
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/ai" component={CloudNative} />
                    <Route exact path="/cloudnative" component={Ai} />
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;