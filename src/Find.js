import React, { Component } from 'react'
import {Table,Input,Button, Container,InputGroup,Row,Col} from 'reactstrap';
import {Modal,ModalBody, ModalHeader, ModalFooter} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
export default class Find extends Component {
   state={
       files:[],
       search:"",
       show:false,
       imgurl:''
   };
   componentDidMount(){
       axios.get("https://api.imgflip.com/get_memes").then(res =>{
        //    console.log(res.data.data.memes);
        console.log('222222',res);
           this.setState({files: res.data.data.memes});
       });
   }
   handleModal(index1){
    this.state.files.map((file, index) =>{
        if(index === index1){
        this.setState({imgurl:file.url});
        // console.log("img", this.state.imgurl);
        }}
    )
       this.setState({show:!this.state.show})
     
   }
    onChangeInput= e =>{
        this.setState({search:e.target.value});
    }
    searchData=()=>{
        const{search}=this.state;
        if(search===''){
        alert("please enter name");
    }
    }
    render() {
        return (
            <div><Container className='first'>
                <Row>
                <Col xs="2" sm="4"></Col> 
                <Col xs="4" sm="4">
                <Input type="text" name="search" onChange={this.onChangeInput} placeholder="search.." />
                </Col>
                <Col xs="4" sm="4">
                <Button color="danger"  onClick={this.searchData}>Search</Button>{' '}               
                </Col>
                </Row>
                </Container>
                <Modal show={this.state.show}>  
                    <Modal.Body><img className='modalimage' src={this.state.imgurl}  /></Modal.Body>
                    <Modal.Footer>
                    <Button onClick={() =>this.handleModal()}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <Container>
                <Table>
                <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {this.state.files.map((file, index1) =>{ 
                const{search}=this.state;
                if(file.name.toLowerCase().indexOf(search) > -1 || file.name.toUpperCase().indexOf(search) > -1 || file.name.toString().indexOf(search) > -1){
                return(
                <tr key={ file.id}>
                    <td>{ file.id }</td>
                    <td>{ file.name}</td>
                    <td>
                    <img onClick={() =>this.handleModal(index1)} className='image' src={file.url} />
                    </td> 
                </tr>
                );
                }else{
                    return null;
                }
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
