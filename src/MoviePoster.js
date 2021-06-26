import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviePoster extends Component {
    
    render() {
        let props = this.props;
        console.log(props);
        return (
            <div className="full-poster apply-transition">
                <div className="movie-poster apply-transition">
                    <Link 
                        to={"/"} 
                        className={this.props.starred === "starred" ? 
                        "link-movie-poster apply-transition poster-starred" : 
                        "link-movie-poster apply-transition"
                        }
                        onClick={() => props.movieClicked(props.movieId)}>
                        <figure className="poster-figure apply-transition">
                            <img 
                                className="responsive-img apply-transition"
                                src={`posters/${props.movieId}.jpg`} 
                                alt={props.movieInfo['title']}
                            ></img>
                            <figcaption className="figcaption apply-transition">
                                <span className={
                                    `apply-transition starred ${
                                        props.starred === "starred" ? 
                                        "starred-yes" : 
                                        "starred-no"
                                        }`
                                    }
                                >
                                    {String.fromCharCode(9733)}
                                </span>
                                <h4 className="rating apply-transition">{props.movieInfo['avg_rating']} / 10</h4>
                                <h4 className="genres apply-transition">{props.movieInfo['genres'][0]}</h4>
                                <h4 className="genres apply-transition">{props.movieInfo['genres'][1] || props.movieInfo['genres'][0]}</h4>
                                <span 
                                    className={"apply-transition view-details " + 
                                        (
                                            this.props.starred === "starred" ? 
                                            "yellowy" :
                                            "greeny"
                                        )
                                    }
                                >Watched It</span>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
                <div className="movie-sub-info">
                    <div className="title-plus-year">
                        <a 
                            className="poster-title-link" 
                            href={props.movieInfo['imdb_link']}
                            target="_blank"
                            rel="noreferrer"
                        >{props.movieInfo['title']}</a>
                        <div className="browse-movie-year">{props.movieInfo['year']}</div>
                    </div>
                    <div className={props.starred === "starred" ?
                            "star-button s-activated apply-radius apply-transition" :
                            "star-button s-deactivated apply-radius apply-transition"
                        }
                        onClick={() => props.movieClicked(props.movieId)}
                    >
                        &#9733;
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviePoster;