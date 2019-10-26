import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/containers/Home';
import Search from './components/containers/Search';

/**
 * The Main container which handles all Routing between pages
 *
 */
const routing = (
    <Router>
        <div className='container-fluid flex-column flex-sm-row'>
            <ul className="nav nav-pills">
                <button className="nav-item btn btn-light">
                    <li className="latest">
                        <Link to="/">Latest</Link>
                    </li>
                </button>
                <button className="nav-item btn btn-light">
                    <li className="search"> 
                        <Link to="/search">Search</Link>
                    </li>
                </button>
            </ul>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search' component={Search}/>
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));