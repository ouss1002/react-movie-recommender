import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div id="searchbar" className="search-div">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search Movies"
                    className="my-input"
                    spellCheck="False"
                />
                <button 
                    className="recommender-button apply-transition apply-radius search-button"
                    onClick={() => this.props.onSendForm(document.getElementById('search-input').value)}
                >Search</button>
            </div>
        )
    }
}

export default SearchBar;