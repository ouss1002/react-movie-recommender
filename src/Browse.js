import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class Browse extends Component {

    state = {
        searchString: "",
        moviesReturned: [],
    }

    changeSearchString = (newString) => {
        let nstr = newString.trim().toLowerCase();
        let mvs = [];

        let mvsinfo = this.props.moviesInfo;
        let objentries = Object.entries(mvsinfo);

        for(let l in objentries) {
            let obj = objentries[l][1];

            if(obj.title.toLowerCase().includes(nstr)) {
                mvs.push(objentries[l][0]);
            }
        }

        this.setState({
            searchString: nstr,
            moviesReturned: mvs,
        });
    }

    render() {
        return (
            <div id="browse" className="paddit">
                <SearchBar str={this.state.searchString} onSendForm={this.changeSearchString} />
                <MovieList 
                    moviesStarred={this.props.moviesStarred} 
                    selectedMovies={this.state.moviesReturned} 
                    moviesInfo={this.props.moviesInfo}
                    movieClicked={this.props.movieClicked}
                />
            </div>
        )
    }
}

export default Browse;