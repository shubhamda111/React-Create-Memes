import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import {Table,Container,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom'
export default class Makelist extends Component {
    constructor(props){
    super(props)
    this.state={
            files:[],
            check:false
        }
    }
    componentDidMount(){
        axios.get(`https://api.imgflip.com/get_memes`).then(res =>{
            console.log(res.data.data.memes);
            this.setState({files: res.data.data.memes.slice(0,15).map(result=>{
                    return {...result,check:false}
            })},()=>{console.log(this.state.files)});
        });
    }
    handleCheck=(index1)=>{
        const{check}=this.state
        let checkData=this.state.files.map((result,index)=>{
            if(index===index1 && result.check===false)
            {
                return(result.check=!result.check)
            }
        })
        this.setState({check:checkData});
        // console.log(check);
    }
    handleSave=()=>{
        const data=this.state.files.filter(result=>result.check===true)
        let file=localStorage.getItem('user');
        if(file==='emp_a')
        {
            localStorage.setItem('emp_a', JSON.stringify(data));
        alert('data saved');

        }else if(file==='emp_b'){
            localStorage.setItem('emp_b', JSON.stringify(data));    
        alert('data saved');
        }
        console.log(data);
    }
    render() {
        return (
            <div>
                <Container><br/>
                <h1 className='head'>Make your list</h1><br/><br/>
                <Link to='/dashboard'><Button color="primary">Back</Button>{' '}</Link>
                <Button color="danger" onClick={this.handleSave}>Save</Button>{' '}
                <Table>
                <thead>
                <tr>
                    <th>Check</th>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {this.state.files.map((file, index1) =>{ 
                   return( 
                <tr key={ file.id}>
                    <td>&emsp;&emsp;<Input type="checkbox" name='check' onChange={()=>this.handleCheck(index1)} />{' '}</td>
                    <td>{ file.id }</td>
                    <td>{ file.name}</td>
                    <td><img  className='image' src={file.url} /></td> 
                </tr>
                   )
                }
                )
                }
                </tbody> 
                </Table>
                </Container>
            </div>
        )
    }
}
