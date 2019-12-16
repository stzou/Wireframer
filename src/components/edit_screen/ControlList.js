import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import {ControlCard} from './ControlCard';
import { NavLink, Redirect } from 'react-router-dom';

export class ControlList extends Component {
    render() {
        
        const { wireframe } = this.props;
        const {updateControlProps,setCurrentControl} = this.props;
        if(!wireframe){
            return <React.Fragment/>
        }
        let controls = wireframe.controls;
        return (
            <div>
            {controls && controls.map(function(control) {
                return (
                        <ControlCard 
                            control={control} 
                            updateControlProps={updateControlProps}
                            setCurrentControl = {setCurrentControl}/>
                );})
            }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth,
    };
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'users'},
    ]),
)(ControlList);
