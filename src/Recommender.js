import React, { Component } from 'react';
import MovieList from './MovieList';
import unirest from 'unirest';

class RecommenderButton extends Component {
    render() {
        return (
            <div id="recommender-button">
                <button 
                    className="recommender-button apply-transition apply-radius"
                    onClick={() => {this.props.onClick()}}    
                >Get Recommendations</button>
            </div>
        )
    }
}

class Recommender extends Component {

    state = {
        moviesReturned: [],
    }

    getRecommendations = () => {

        var dataObj = {
            'ids': [...this.props.moviesStarred]
        };
        
        var request = unirest.post(
                'http://127.0.0.1:5000/predict'
            ).headers({
                'Access-Control-Allow-Origin': 'http://127.0.0.1:5000/',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
            }).type(
                'json'
            ).send(
                JSON.stringify(dataObj)
            ).then((res) => {
                this.setState({
                    moviesReturned: res.body['rets'],
                });
            });
    }

    render() {
        return (
            <div id="recommender" className="paddit">
                <RecommenderButton onClick={this.getRecommendations} />
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

export default Recommender;