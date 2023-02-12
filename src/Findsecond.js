import React, { Component } from 'react'
import { Input, Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Row, Col, CustomInput, Form, FormGroup } from 'reactstrap';
import axios from 'axios';
import './App.css';
export default class Findsecond extends Component {
    constructor() {
        super();
        this.state = {
            files: [],
            randImg: 'https://i.imgflip.com/51s5.jpg',
            upperTxt: '',
            lowerTxt: '',
            viewTop: '',
            viewDown: '',
            dropdown: false,
            fontSize: '',
            color: ''
        }
    } 
    componentDidMount() {
        axios.get(`https://api.imgflip.com/get_memes`).then(res => {
            console.log(res.data.data.memes);
            this.setState({ files: res.data.data.memes });
        });
    }
    handleDrop = () => {
        const { dropdown } = this.state;
        this.setState({ dropdown: !dropdown });
    }
    generateImage = () => {
        const randomNumber = Math.floor(Math.random() * 101)
        const randomMemesImg = this.state.files[randomNumber].url
        this.setState({ randImg: randomMemesImg })
        console.log(randomMemesImg);
    }
    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    } 
    applyTxt = (e) => {
        this.setState({ viewTop: this.state.upperTxt });
        this.setState({ viewDown: this.state.lowerTxt });
        if(this.state.upperTxt==''){
            alert('please make some changes');
        }
    }
    handleSize = (e) => {
        this.setState({ fontSize: e.target.value });
    }
    handleColor = (e) => {
        this.setState({ color: e.target.value });
    }
    render() {
        const { dropdown, fontSize, color } = this.state;
        return (
            <div>
                <Container className='second'>
                    <h1 className='head'>Create Classic and Unique Memes</h1><br/>
                    <Input type="text" 
                     name="upperTxt"
                     value={this.state.upperTxt} 
                     onChange={this.onChangeInput} 
                     placeholder="upper text.." />
                    <br />
                    <Input type="text"
                     name="lowerTxt"
                     value={this.state.lowerTxt}
                     onChange={this.onChangeInput} 
                     placeholder="bottom text.." />
                    <br />
                    <Row>
                        <Col><Button color="danger" onClick={this.generateImage}>Click here to change picture</Button>{' '}</Col>
                        <Col>
                            <Dropdown isOpen={this.state.dropdown} toggle={this.handleDrop}>
                                <DropdownToggle caret> Font Size :{this.state.fontSize}</DropdownToggle>
                                <DropdownMenu onClick={this.handleSize}>
                                    <DropdownItem header>Select Size</DropdownItem>
                                    <DropdownItem value='2'>2</DropdownItem>
                                    <DropdownItem value='4'>4</DropdownItem>
                                    <DropdownItem value='6'>6</DropdownItem>
                                    <DropdownItem value='8'>8</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col onClick={this.handleColor}>
                            <Form>
                                <FormGroup tag="fieldset">
                                    <legend>Radio Buttons</legend>
                                    <FormGroup check>
                                        <Label check><Input type="radio" name="radio1" value='red' />{' '} Red</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check><Input type="radio" name="radio1" value='green' />{' '} Green</Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check><Input type="radio" name="radio1" value='blue' />{' '} Blue</Label>
                                    </FormGroup>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col><Button color="success" onClick={this.applyTxt}>Apply</Button>{' '}</Col>
                    </Row>
                    <div className='textover'>
                        <span className='textupper' ><font size={fontSize} color={color}>{this.state.viewTop}</font></span>
                        <img className='generateimage' src={this.state.randImg} />
                        <span className='textlower'><font size={fontSize} color={color}>{this.state.viewDown}</font></span>
                    </div>
                </Container>
            </div>
        );
    }
}
