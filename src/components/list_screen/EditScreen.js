import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

export class EditScreen extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s3">
                    asd
                </div>
                <div className="col s6 border">
                    asd
                </div>
                <div className="col s3">
                    fd
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
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