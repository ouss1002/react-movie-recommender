import React, { Component } from 'react';
import NavBarButton from './NavBarButton'

class NavBar extends Component {
    render() {
        let props = this.props;
        return (
            <div id="navbar">
                <NavBarButton 
                    onChange={props.onChange} 
                    text="Home"
                    current={props.currentBody === "home"} 
                />
                <NavBarButton 
                    onChange={props.onChange} 
                    text="Browse" 
                    current={props.currentBody === "browse"}
                />
                <NavBarButton 
                    onChange={props.onChange} 
                    text="Recommender" 
                    current={props.currentBody === "recommender"}
                />
                <NavBarButton 
                    onChange={props.onChange} 
                    text="Liked" 
                    current={props.currentBody === "liked"}
                />
                <NavBarButton 
                    onChange={props.onChange} 
                    text="Profiles" 
                    current={props.currentBody === "profiles"}
                />
                {/* <NavBarButton onChange={props.onChange} text="Results" /> */}
                <NavBarButton 
                    onChange={props.onChange} 
                    text="About Us" 
                    current={props.currentBody === "aboutus"}
                />
            </div>
        )
    }
}

export default NavBar;