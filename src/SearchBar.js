import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div id="searchbar" className="search-div">
                <input
                    input="text"
                    id="search-input"
                    placeholder="Search Movies"
                    className="my-input apply-transition"
                    spellCheck="False"
                />
                <button 
                    className="apply-transition apply-radius search-button"
                    onClick={() => this.props.onSendForm(document.getElementById('search-input').value)}
                >Search</button>
            </div>
        )
    }
}

export default SearchBar;