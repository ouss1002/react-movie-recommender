import React, { Component } from 'react';
import MoviePoster from './MoviePoster';

class MovieList extends Component {
    
    render() {
        let props = this.props;
        return (
            <div className="movie-list">
                {
                    !!props.selectedMovies.length > 0 && props.selectedMovies.map((id) => (
                        <MoviePoster 
                            key={id}
                            movieId={id} 
                            movieInfo={props.moviesInfo[String(id)]} 
                            starred={props.moviesStarred.has(parseInt(id)) ? "starred" : "not starred"}
                            movieClicked={props.movieClicked}
                        />
                    ))
                }
                {!!props.selectedMovies.length === 0 && 
                    <div>
                        -
                    </div>
                }
            </div>
        )
    }
}

export default MovieList;