
import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    onActivateEditState = (a) => {
        console.log('Hello1 ' + a);
        this.setState({
            editMode: true
        })
    }

    onRemoveEditState = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        const vara = 'hello';
        return (
            <div>
                {
                    !this.state.editMode && <div>
                        <span onClick={() => this.onActivateEditState(vara)}>
                            {this.props.status}
                        </span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        <input autoFocus={true} onBlur={this.onRemoveEditState} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;
