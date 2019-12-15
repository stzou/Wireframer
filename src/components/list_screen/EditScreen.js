import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {Button} from 'react-materialize';
import { Link } from 'react-router-dom';
import { getFirestore } from 'redux-firestore';
import ControlList from './ControlList';

export class EditScreen extends Component {
    
    createNewContainer = () =>{

    }

    createNewPrompt = () =>{
        
    }
    
    createNewButton = () =>{
        
    }

    createNewTextfield = () =>{
        
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
                        <Button className="col s3">Save</Button>
                        <Link to={'/home/'}>
                            <Button className="col s3">Close</Button>
                        </Link>
                    </div>
                    <div className="container-control-option card" onClick = {this.createNewContainer()}>
                        <div className="container-control card">
                        </div>
                        <div className=" container-text">Container</div>
                    </div>
                    <div className="prompt-control-option card" onClick = {this.createNewPrompt()}>
                        <div className="center prompt-text">Prompt for Input:
                            <br></br>
                            Label
                        </div>
                    </div>
                    <div className="button-control-option card" onClick = {this.createNewButton()}>
                        <Button className="button-control">Submit</Button>
                        <div className="center prompt-text">
                            Button
                        </div>
                    </div>
                    <div className="textfield-control-option card" onClick = {this.createNewTextfield()}>
                        <div className="input-control grey-text left-align">Input</div>
                        <div className="center textfield-text">
                            Textfield
                        </div>
                    </div>

                </div>
                <div className="col s6 edit-container">
                    <ControlList wireframe={this.props.wireframe}></ControlList>
                </div>
                <div className="col s3 control-details-container">
                    fd
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    const {key} = ownProps.match.params;
    const wireframeKey = key;

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