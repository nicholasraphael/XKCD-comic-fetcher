import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/containers/Home';
import Search from './components/containers/Search';

const routing = (
    <Router>
        <div className='container-fluid'>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="list-group-item"> 
                    <Link to="/search">Search</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search' component={Search}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));