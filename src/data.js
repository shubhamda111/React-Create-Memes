import React, { Component } from 'react';
import {Button} from 'reactstrap'
import jsPDF from 'jspdf'
import logo from '../src/image/a.png'


class Data extends Component {
    pdfGenerate=()=>{
        var doc=new jsPDF('landscape','px','a4','false');
        doc.addImage(logo,'PNG',65,20,500,400)
        doc.addPage()
        doc.setFont('Helvertica','bold')
        doc.text(60,60,'Name')
        doc.text(60,80,'Email')
        doc.text(60,100,'Mob.No.')
        doc.setFont('Helvertica','Normal')
        doc.text(100,60,': ABC')
        doc.text(100,80,': abc@gmail.com')
        doc.text(120,100,': 123456789')

        doc.save('a.pdf')
    }
    render() {
        return (
            <div style={{textAlign:'center'}}><br/>
                <Button onClick={this.pdfGenerate}>Download pdf</Button>
            </div>
        );
    }
}

export default Data;