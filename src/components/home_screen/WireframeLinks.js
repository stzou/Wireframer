import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getFirestore } from 'redux-firestore';
import { firestoreConnect } from 'react-redux-firebase';
import  WireframeCard from './WireframeCard';

class WireframeLinks extends React.Component {
    render() {
        let wireframes = null;
        if(this.props.users!==undefined){
            for(var i=0;i<this.props.users.length;i++){
                if(this.props.users[i].id === this.props.auth.uid){
                    wireframes = this.props.users[i].wireframes;
                }
            }
        }
        return (
            <div className="todo-lists section">
                {wireframes && wireframes.map(wireframe => (
                    <Link to={'/wireframe/' + wireframe.key} key={wireframe.id}>
                        <WireframeCard wireframe={wireframe} wireframes={wireframes}/>
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = dispatch => ({
  });

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
      { collection: 'users'},
    ]),
)(WireframeLinks);