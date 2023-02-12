import React, { Component } from 'react'
import {Table,Button,Container} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class Showlist extends Component {
    constructor(props){
        super(props);
        this.state={
            userData : [],
        }
    }
    
    componentDidMount(){
        var userData;
        let data=localStorage.getItem('user')
       
        if(data==='emp_a'){
             userData=JSON.parse(localStorage.getItem('emp_a'))
        }else if(data==='emp_b'){
             userData=JSON.parse(localStorage.getItem('emp_b'))
        }
        this.setState({userData: userData})
    }   
    render() {
        const {userData} = this.state;
        // console.log("User data",userData);
        
        return (
            <div>
                <Container><br/>
                <h1 className='head'>Your List</h1><br/><br/>
                <Link to='/dashboard'><Button color="danger">Back</Button>{' '}</Link>
                <Table>
                <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {userData.map((file) =>{ 
                return( 
                <tr key={ file.id}>
                    <td>{ file.id }</td>
                    <td>{ file.name}</td>
                    <td><img  className='image' src={file.url} /></td> 
                </tr>
                   );
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
// 153