import React, { Component } from 'react';

class Profile extends Component {


    render() {
        return (
            <div className="profile">
                <div 
                    className="profile-button apply-radius apply-transition"
                    onClick={() => this.props.changeProfile(this.props.name)}
                >
                    {this.props.name.toUpperCase()}
                </div>
                <div 
                    className={
                        this.props.profileChosen.toLowerCase() === this.props.name.toLowerCase() ?
                        "profile-label-loaded" :
                        "profile-label"
                    }>
                    Loaded
                </div>
            </div>
        );
    }
}

class Profiles extends Component {


    render() {
        return (
            <div className="profiles">
                {
                    Object.keys(this.props.profiles).map((key) => (
                        <Profile 
                            key={key}
                            name={key}
                            changeProfile={this.props.changeProfile}
                            profileChosen={this.props.profileChosen}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Profiles;