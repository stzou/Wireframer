import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import TodoListLinks from './TodoListLinks';
import {createTodoList} from '../../store/database/asynchHandler';
import { getFirestore } from 'redux-firestore';
import { Link } from 'react-router-dom';
import * as actionCreators from '../../store/actions/actionCreators.js'
import { Button } from 'react-materialize';
 
class HomeScreen extends Component {


    handleNewList = (e) => {
        const {props} = this;
        const firestore = getFirestore();
        console.log(this.props.users[0]);
        let wireframes = null;
        for(var i=0;i<this.props.users.length;i++){
            if(this.props.users[i].id === this.props.auth.uid){
                wireframes = this.props.users[i].wireframes;
            }
        }
        let date = new Date().getTime()*-1;
        let key = wireframes.length;
        const newWireframe = {
            key: key,
            name: "Unknown",
            controls: []
        };
        wireframes.push(newWireframe);
        firestore.collection("users").doc(this.props.auth.uid).update({
            wireframes: wireframes
        })
    }


    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }
        console.log(this.props.wireframes);
        let wireframes = [];
        if(this.props.wireframes){
            wireframes = this.props.wireframes;
        }

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        <TodoListLinks/>
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            Wireframer
                        </div>
                        
                        <div className="home_new_list_container">
                            <Link to={'/wireframe/'+ wireframes.length}>
                                <Button className="home_new_list_button" onClick={this.handleNewList}>
                                    Create a New Wireframe
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.firestore.ordered.users);
    const users = state.firestore.ordered.users;
    const auth = state.firebase.auth;
    let wireframes = null;
    if(users!==undefined){
        for(var i=0;i<users.length;i++){
            if(users[i].id === auth.uid){
                wireframes = users[i].wireframes;
            }
        }
    }
    return {
        wireframes: wireframes,
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    };
};
const mapDispatchToProps = dispatch => ({
    createNewList: (todoList) => dispatch(createTodoList(todoList)),
  });

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection: 'users'},
    ]),
)(HomeScreen);