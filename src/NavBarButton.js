import React, { Component } from 'react';

class NavBarButton extends Component {
    render() {

        let props = this.props;

        return (
            <div 
                className="navbar-button apply-transition apply-radius"
                onClick={() => this.props.onChange(props.text)}
                >
                {props.text}
            </div>
        )
    }
}

export default NavBarButton;