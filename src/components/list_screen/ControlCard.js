import React, { Component } from 'react'

export class ControlCard extends Component {
    render() {
        const {control} = this.props;
        console.log(control);
        return (
            <div>
                {control.type}
            </div>
        )
    }
}

export default ControlCard
