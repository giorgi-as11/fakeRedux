import React from "react";

class Status extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus onBlur={this.deActivateEditMode} value={this.props.status} />
                    </div>
                    :
                    <div>
                        <span onClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }



            </>
        )
    }
}

export default Status