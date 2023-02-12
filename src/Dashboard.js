import React, { Component } from 'react'
import {Button, Container} from 'reactstrap';
import {Link} from 'react-router-dom' 
import {Redirect} from 'react-router-dom'
import Showlist from './Showlist'
export default class Dashboard extends Component {
    render() {
        const data=localStorage.getItem('user');
        return (
            <div>
                <Container><br/>
                <h1 className='head'>Dashboard</h1><br/><br/>
                <span className='dash-user'> Dashboard of emp : </span><span className='user'> {data} </span><br/><br/>
                <Link to='/makelist'><Button color="danger">Make list</Button>{' '}</Link>
                <Link to='/showlist'><Button color="success" >Show list</Button>{' '}</Link>
                <Link to='/logout'><Button color="danger">Logout</Button></Link>{' '}
                </Container>
            </div>
        )
    }
}
