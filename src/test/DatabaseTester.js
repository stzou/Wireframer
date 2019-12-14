import React from 'react'
import { connect } from 'react-redux';
import wireframeJson from './WireframeData.json';
import { getFirestore } from 'redux-firestore';

class DatabaseTester extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('users').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('users').doc(doc.id).delete();
            })
        });
    }

    handleReset = () => {
        const fireStore = getFirestore();
        
                wireframeJson.users.forEach(user => {
                    fireStore.collection('users').doc(user.uid).set({
                            firsName: user.firstName,
                            lastName: user.lastName,
                            initials: user.initials,
                            userType: user.userType,
                            wireframes: user.wireframes,
                        }).then(() => {
                            console.log("DATABASE RESET");
                        }).catch((err) => {
                            console.log(err);
                        });
                });
//        });
        // wireframeJson.users.forEach(user => {
        //     fireStore.collection('Wireframes').add({
        //             owner: user.owner,
        //             userType: user.user_type,
        //             //lastUpdated: wireframe.lastUpdated,
        //             wireframes: user.wireframes,
        //         }).then(() => {
        //             console.log("DATABASE RESET");
        //         }).catch((err) => {
        //             console.log(err);
        //         });
        // });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
}

export default connect(mapStateToProps)(DatabaseTester);