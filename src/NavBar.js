import React, { Component } from 'react';
import NavBarButton from './NavBarButton'

class NavBar extends Component {
    render() {
        let props = this.props;
        return (
            <div id="navbar">
                <NavBarButton onChange={props.onChange} text="Home" />
                <NavBarButton onChange={props.onChange} text="Browse" />
                <NavBarButton onChange={props.onChange} text="Recommender" />
                <NavBarButton onChange={props.onChange} text="Liked" />
                {/* <NavBarButton onChange={props.onChange} text="Results" /> */}
                <NavBarButton onChange={props.onChange} text="About Us" />
            </div>
        )
    }
}

export default NavBar;