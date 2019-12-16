import React, { Component } from 'react'
import { Rnd }from 'react-rnd';
import {Button} from 'react-materialize';

export class ControlCard extends Component {
    
    state = {
        width: this.props.control.width,
        height: this.props.control.height,
        x: this.props.control.x,
        y: this.props.control.y
    }
    render() {
        const style = {
            border: "solid"+this.props.control.border_radius+ "#ddd",
            font_size:"12",
            font_color:"black",
            border_color:"black",
            background_color:"green",
            border_thickness:"2",
            border_radius:"1"
          };
        const {control} = this.props;
        console.log(control);
        if(control.type === "container"){
            return (
                <div>
                    <Rnd 
                        className = "container-card"
                        style={
                            {
                                borderRadius: control.border_radius,
                                borderStyle: "solid",
                                borderWidth: control.border_thickness,
                                borderColor: control.border_color,
                                fontSize: control.font_size,
                                color: control.font_color,
                                backgroundColor: control.background_color,
                                
                            }
                        }
                        onClick = {(e) => this.props.setCurrentControl(e,control.key)}
                        size={{ width: this.state.width, height: this.state.height }} position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => {
                            this.setState({ x: d.x, y: d.y });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                    >

                    </Rnd>
                
                </div>
            )
                
        }
        else if(control.type ==="button") {
            return (
                <div >
                    <Rnd 
                        className = "button-card"
                        style={
                            {
                                borderRadius: control.border_radius,
                                borderStyle: "solid",
                                borderWidth: control.border_thickness,
                                borderColor: control.border_color,
                                fontSize: control.font_size,
                                color: control.font_color,
                                backgroundColor: control.background_color,
                            }
                        }
                        onClick = {(e) => this.props.setCurrentControl(e,control.key)}
                        size={{ width: this.state.width, height: this.state.height }} 
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => {
                            this.setState({ x: d.x, y: d.y });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                    >
                    <div className="button-card-content">Submit</div>
                    </Rnd>
                
                </div>
            )
        }
        else if(control.type ==="textfield") {
            return (
                <div>
                    <Rnd 
                        className = "textfield-card"
                        style={
                            {
                                borderRadius: control.border_radius,
                                borderStyle: "solid",
                                borderWidth: control.border_thickness,
                                borderColor: control.border_color,
                                fontSize: control.font_size,
                                color: control.font_color,
                                backgroundColor: control.background_color,
                            }
                        }
                        onClick = {(e) => this.props.setCurrentControl(e,control.key)}
                        size={{ width: this.state.width, height: this.state.height }} 
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => {
                            this.setState({ x: d.x, y: d.y });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                    >
                    <input type="text" className = "textfield-card-content">
                    </input>

                    </Rnd>
                
                </div>
            )
        }
        else if(control.type ==="label") {
            return (
                <div>
                    <Rnd 
                        className = "label-card"
                        style={
                            {
                                borderRadius: control.border_radius,
                                borderStyle: "solid",
                                borderWidth: control.border_thickness,
                                borderColor: control.border_color,
                                fontSize: control.font_size,
                                color: control.font_color,
                                backgroundColor: control.background_color,
                            }
                        }
                        onClick = {(e) => this.props.setCurrentControl(e,control.key)}
                        size={{ width: this.state.width, height: this.state.height }} 
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => {
                            this.setState({ x: d.x, y: d.y });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                            this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                            this.props.updateControlProps(control.key,this.state.width,this.state.height,this.state.x,this.state.y)
                        }}
                    >
                    <input className="label-card-content" placeholder="Label" type="text">
                    </input>
                    </Rnd>
                
                </div>
            )
        }
    }
}

export default ControlCard
