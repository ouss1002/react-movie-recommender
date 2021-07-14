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
            <div id="browse">
                <div id="searchbar" className="search-div">
                    <input
                        input="text"
                        id="search-input"
                        placeholder="Add Profile"
                        className="my-input apply-transition"
                        spellCheck="False"
                    />
                    <button 
                        className="apply-transition apply-radius search-button"
                        onClick={() => this.props.addProfile(document.getElementById('search-input').value)}
                    >Add Profile</button>
                </div>
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
            </div>
        );
    }
}

export default Profiles;