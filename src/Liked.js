import React, { Component } from 'react';
import MovieList from './MovieList';

class Liked extends Component {

    render() {
        
        console.log([...this.props.moviesStarred]);

        return (
            <div id="liked" className="paddit">
                <MovieList 
                    moviesStarred={this.props.moviesStarred} 
                    selectedMovies={[...this.props.moviesStarred]} 
                    moviesInfo={this.props.moviesInfo}
                    movieClicked={this.props.movieClicked}
                />
            </div>
        )
    }
}

export default Liked;