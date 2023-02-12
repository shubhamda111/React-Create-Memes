import React, { Component } from 'react'
import Login from './Login'
import Makelist from './Makelist'
import Showlist from './Showlist'
import Logout from './Logout'
import Find from './Find';
import Findsecond from './Findsecond';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Protected from './Protected'
import Dashboard from './Dashboard';

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                <Route path='/' exact component={Find}/>
                <Route path='/findsecond' exact component={Findsecond}/>
                <Route path='/login' exact component={Login}/>
                <Protected exact path='/dashboard' component={Dashboard}/>
                <Protected exact path="/makelist" component={Makelist} />
                <Protected exact path="/showlist" component={Showlist} />
                <Route path="/logout" component={Logout} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}
