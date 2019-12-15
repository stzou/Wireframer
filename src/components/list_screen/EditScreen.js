import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import { getFirestore } from 'redux-firestore';
import ControlList from './ControlList';
import { Properties } from './Properties';

export class EditScreen extends Component {
    state = {
        blah:false
    }

    updateControlProps = (key, w,h,x,y) =>{
        if(this.props.wireframe){
            let indexOfControl = null;
            for(var i =0;i<this.props.wireframe.controls.length;i++){
                if(this.props.wireframe.controls[i].key === key){
                    indexOfControl = i;
                }
            }
            console.log(indexOfControl);
            console.log(this.props.wireframe.controls[indexOfControl]);
            this.props.wireframe.controls[indexOfControl].width = w;
            this.props.wireframe.controls[indexOfControl].height = h;
            this.props.wireframe.controls[indexOfControl].x = x;
            this.props.wireframe.controls[indexOfControl].y = y;
            console.log(this.props.wireframe.controls[indexOfControl]);

        }
    }
    saveChanges = () => {
        const firestore = getFirestore();
        if(this.props.wireframes){
            this.props.wireframes[this.props.wireframe.key] = this.props.wireframe;
        }
        firestore.collection("users").doc(this.props.auth.uid).update({
            wireframes: this.props.wireframes
        })

    }
    
    createNewContainer = () =>{
        const firestore = getFirestore();
        console.log("asdsadasd");

        if(this.props.wireframe){
            const { wireframe,wireframes } = this.props;
            const copy = wireframes;
            const newContainer ={
                type:"container",
                key:wireframe.controls.length,
                height:"200px",
                width:"200px",
                x: 10,
                y: 10,
                font_size:"12",
                font_color:"black",
                border_color:"black",
                background_color:"white",
                border_thickness:"2",
                border_radius:"1"
    
            };
            for(var i = 0;i<wireframes.length;i++){
                if(wireframes[i].key===wireframe.key){
                    wireframes[i].controls.push(newContainer);
                }
            }
            firestore.collection("users").doc(this.props.auth.uid).update({
                wireframes: copy
            })
            

        }
        


    }

    createNewPrompt = () =>{
        
        const firestore = getFirestore();

        if(this.props.wireframe){
            const { wireframe,wireframes } = this.props;
            const newLabel ={
                type:"label",
                key:wireframe.controls.length,
                height:"30px",
                width:"60px",
                x: 10,
                y: 10,
                font_size:"12",
                font_color:"black",
                border_color:"black",
                background_color:"white",
                border_thickness:"2",
                border_radius:"1"
    
            };
            for(var i = 0;i<wireframes.length;i++){
                if(wireframes[i].key===wireframe.key){
                    wireframes[i].controls.push(newLabel);
                }
            }
            firestore.collection("users").doc(this.props.auth.uid).update({
                wireframes: wireframes
            })
        }
        

        
    }
    
    createNewButton = () =>{
        const firestore = getFirestore();
        if(this.props.wireframe){
            const { wireframe,wireframes } = this.props;
            const newButton ={
                type:"button",
                key: wireframe.controls.length,
                height:"40px",
                width:"100px",
                x: 10,
                y: 10,
                font_size:"12",
                font_color:"black",
                border_color:"black",
                background_color:"green",
                border_thickness:"2",
                border_radius:"1"
    
            };
            for(var i = 0;i<wireframes.length;i++){
                if(wireframes[i].key===wireframe.key){
                    wireframes[i].controls.push(newButton);
                }
            }
            firestore.collection("users").doc(this.props.auth.uid).update({
                wireframes: wireframes
            })
        }
        
    }

    createNewTextfield = () =>{
        const firestore = getFirestore();
        if(this.props.wireframe){
            const { wireframe,wireframes } = this.props;
            const newTextfield ={
                type:"textfield",
                key: wireframe.controls.length,
                height:"25px",
                width:"100px",
                x: 10,
                y: 10,
                font_size:"12",
                font_color:"black",
                border_color:"black",
                background_color:"green",
                border_thickness:"2",
                border_radius:"1"
    
            };
            for(var i = 0;i<wireframes.length;i++){
                if(wireframes[i].key===wireframe.key){
                    wireframes[i].controls.push(newTextfield);
                }
            }
            firestore.collection("users").doc(this.props.auth.uid).update({
                wireframes: wireframes
            })
        }
        
    }


    render() {
            console.log(this.props.wireframe);
        return (
            <div className="row">
                <div className="col s3 controls-container">
                    <div className="row ">
                        <Button className="col s3">
                            <i className="material-icons">zoom_in</i>
                        </Button>
                        <Button className="col s3">
                            <i className="material-icons">zoom_out</i>
                        </Button>
                        <Button className="col s3" onClick = {() => this.saveChanges()}>Save</Button>
                        <Link to={'/home/'}>
                            <Button className="col s3">Close</Button>
                        </Link>
                    </div>
                    <div className="container-control-option card" onClick = { () => this.createNewContainer()}>
                        <div className="container-control card">
                        </div>
                        <div className=" container-text">Container</div>
                    </div>
                    <div className="prompt-control-option card" onClick = {() => this.createNewPrompt()}>
                        <div className="center prompt-text">Prompt for Input:
                            <br></br>
                            Label
                        </div>
                    </div>
                    <div className="button-control-option card" onClick = {() => this.createNewButton()}>
                        <Button className="button-control">Submit</Button>
                        <div className="center prompt-text">
                            Button
                        </div>
                    </div>
                    <div className="textfield-control-option card" onClick = {() => this.createNewTextfield()}>
                        <div className="input-control grey-text left-align">Input</div>
                        <div className="center textfield-text">
                            Textfield
                        </div>
                    </div>

                </div>
                <div className="col s6 edit-container">
                    <ControlList wireframe={this.props.wireframe} updateControlProps={this.updateControlProps}></ControlList>
                </div>
                <div className="col s3 control-details-container">
                    <Properties></Properties>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const {key} = ownProps.match.params;

    const users = state.firestore.ordered.users;
    const auth = state.firebase.auth;
    let wireframes = null;
    let wireframe = null;
    if(users!==undefined){
        for(var i=0;i<users.length;i++){
            if(users[i].id === auth.uid){
                wireframes = users[i].wireframes;
                for( var j=0;j<wireframes.length;j++){
                    if(wireframes[j].key == key){
                        wireframe = wireframes[j];
                    }
                }
            }
        }
    }
    
    return {
        wireframe: wireframe,
        wireframes: wireframes,
        users: state.firestore.ordered.users,
        auth: state.firebase.auth,
    };
};
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'users'},
    ]),
)(EditScreen);