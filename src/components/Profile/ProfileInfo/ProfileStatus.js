
import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    onActivateEditState = () => {
        this.setState({
            editMode: true
        })
    }

    onLeaveEditState = () => {
        this.setState({
            editMode:false
        })
        this.props.updateProfileStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        const status = e.target.value;
        this.setState({
            status
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode && <div>
                        <span onClick={() => this.onActivateEditState()}>
                            {this.props.status}
                        </span>
                    </div>
                }
                {
                    this.state.editMode && <div>
                        <input
                            autoFocus={true} 
                            onBlur={this.onLeaveEditState} 
                            value={this.state.status}
                            onChange={this.onChangeStatus}>
                            
                        </input>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;
