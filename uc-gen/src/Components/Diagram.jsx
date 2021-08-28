import { DiagramView, NodeListView } from 'diagram-library-react';
import mf from 'diagram-library';
import { useState } from 'react';
import React, { Component } from 'react'
import '../CSS/Diagram.css'
import { Button } from 'bootstrap';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
export class Diagram extends Component {


    

    constructor(props){
        super(props);

        var diagram = new mf.Diagramming.Diagram();
        diagram.setModificationStart(mf.Diagramming.ModificationStart.AutoHandles);
        diagram.setAllowInplaceEdit(true);
        diagram.setLinkHeadShape("triangle");
        diagram.setLinkHeadShapeSize(3);
        // diagram.setTheme(mf.Diagramming.Theme.getBlue());
        //diagram.setAllowInplaceEdit(mf.Diagramming.setAllowInplaceEdit(true));
        var nodes = [];
        var shapeIds = ["Actor", "Decision", "Rectangle", "RoundRect", "Ellipse"];
        let links;
        for (var i = 0; i < shapeIds.length; i++){
            var node = new mf.Diagramming.ShapeNode(diagram);
            node.setShape(shapeIds[i]);
            nodes.push(node);
            (shapeIds[i] == "Ellipse" ? node.setText("Usecase") : node.setText(shapeIds[i]));
            node.setShowDeleteButton(true);
            // node.getShowDeleteButton(true);
            node.setTextColor("black");
            //nodes.setAllowInplaceEdit(true);
        }


        this.state = {
            diagram: diagram,
            nodes: nodes,
            captions: shapeIds,
            behavior: mf.Diagramming.Behavior.LinkShapes,
            theme: diagram.setTheme,
        };
    }


    onSelectChange(event){
        this.setState({behavior: + event.target.value});
    }

    onChangeTheme(event){
        console.log(event.target.value);
        if(event.target.value === '0')
                this.state.diagram.setTheme(null);
        else if(event.target.value === '1')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getBlue());
        else if(event.target.value === '2')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getBusiness());
        else if(event.target.value === '3')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getEarth());
        else if(event.target.value === '4')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getGray());
        else if(event.target.value === '5')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getGreen());
        else if(event.target.value === '6')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getLight());
        else if(event.target.value === '7')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getPastel());
        else if(event.target.value === '8')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getPeach());
        else if(event.target.value === '9')
                this.state.diagram.setTheme(mf.Diagramming.Theme.getStandard());
        }
    

    render() {

        var props = {
            "id": "diagram1",
            "behavior": this.state.behavior,
            "diagram": this.state.diagram,
        }

        return (
            <div className = 'diagram'>
                <Container className = 'diagram_container'> 
                
                <div className="sidebarLeft">
                    <NodeListView 
                    nodes = {this.state.nodes}
                    captions = {this.state.captions}
                    />
                    <select className = 'dropdown_menu' defaultValue = "3" onChange = {this.onSelectChange.bind(this)}>
                        <option value="12">Pan</option>
                        <option value = "3">LinkShapes</option>
                        <option value = "6">Modify</option>
                    </select> 

                    <select className = 'dropdown_menu' onChange = {this.onChangeTheme.bind(this)} defaultValue = '0'>
                        <option value = '0'>Default</option>
                        <option value = "1">Blue</option>
                        <option value = "2">Business</option>
                        <option value = "3">Earth</option>
                        <option value = "4">Gray</option>
                        <option value = "5">Green</option>
                        <option value = "6">Lime</option>
                        <option value = "7">Pastel</option>
                        <option value = "8">Peach</option>
                        <option value = "9">Standard</option>
                    </select>
                </div>
                <div className="main">
                
                    <DiagramView 
                    diagram = {this.state.diagram} {...props}/>
                </div>
                
            </Container>
            </div>
        )
    }
}

export default Diagram
