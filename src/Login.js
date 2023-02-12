import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import {Redirect} from 'react-router-dom'
const EmpA={
    username:"emp_a",
    password:"pass"
}
const EmpB={
    username:"emp_b",
    password:"password"
}
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            logged:''
        }
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    } 
    handleSubmit=(e)=>{
        e.preventDefault();
        const{username,password}=this.state;
        if((username===EmpA.username && password===EmpA.password)||(username===EmpB.username && password===EmpB.password))
           { 
            this.setState({logged:true})
            // alert('successful')
            localStorage.setItem('user',username);
           }else{
               alert('Wrong user id or password');
           }
    }
    render() {
        if(this.state.logged){
            return <Redirect to='/dashboard'/>
        }
        return (
            <div>
            <Container>
            <h1 className='head'>Login</h1><br/>
              <Form onSubmit={this.handleSubmit}>
                <Label for="exampleEmail">Username</Label><br/>
                <Input type="text" 
                     name="username"
                     value={this.state.username} 
                     onChange={this.onChangeInput} 
                     placeholder="username.." />
                <br/>
                <Label for="exampleEmail">Password</Label><br/>
                <Input type="text" 
                     name="password"
                     value={this.state.password} 
                     onChange={this.onChangeInput} 
                     placeholder="password.." />
                <br/>
                <Button color="success">Login</Button>{' '}
              </Form>
            </Container>
            </div>
        )
    }
}
