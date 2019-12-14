import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import { Button,Modal } from 'react-materialize';
 

class TodoListCard extends React.Component {

    deleteWireframe = (e) =>{
        e.preventDefault();
        const firestore = getFirestore();

        let indexOfWireframe = null;
        for(var i=0;i<this.props.wireframes.length;i++){
            if(this.props.wireframes[i].key === this.props.wireframe.key){
                indexOfWireframe = i;
            }
        }
        this.props.wireframes.splice(indexOfWireframe,1);
        firestore.collection("users").doc(this.props.auth.uid).update({
            wireframes: this.props.wireframes
        })


    }
    stopPropagation =(e) => {
        e.preventDefault();
    }

    render() {
        const { wireframe } = this.props;
        console.log("WireframeCard, wireframe.id: " + wireframe.key);
        return (
            <div className="card z-depth-0 todo-list-link col s12">
                <div className="card-content grey-text text-darken-3 col 8">
                    <span className="card-title">{wireframe.name}</span>
                </div>
                <Modal header="Delete Wireframe?" onClick = {e=>this.stopPropagation(e)} trigger={
                    <Button className = "delete-wireframe-button red col 4">
                        <i className="material-icons">close</i>
                    </Button>}>
                    <div className="modal_dialog" >
                        <section className="dialog_content">
                            <p><strong>Are you sure you want to delete this wireframe?</strong></p>
                        </section>
                        <Button id="dialog_yes_button" modal = "close" onClick = {e=> this.deleteWireframe(e)}>Yes</Button>
                        <Button id="dialog_no_button" modal ="close" onClick = {e=> this.stopPropagation(e)}>No</Button>
                        <div className="dialog_footer">
                            <p><strong>The wireframe will not be retreivable.</strong></p>
                        </div>
                    </div>
                </Modal>
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
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'users'},
    ]),
)(TodoListCard);