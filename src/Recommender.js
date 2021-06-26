import React, { Component } from 'react';
import MovieList from './MovieList';
import unirest from 'unirest';
import { Slider } from '@material-ui/core' 
import { withStyles } from '@material-ui/core/styles';

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#6ac045',
      border: '2px solid #6ac045',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    track: {
      height: 8,
      borderRadius: 4,
      backgroundColor: '#6ac045',
    },
    rail: {
      height: 8,
      borderRadius: 4,
      backgroundColor: '#428E42',
    },
  })(Slider);


class RecommenderButton extends Component {

    state = {
        value: 20,
    }

    handleChange = (event, value) => this.setState({ value });

    render() {
        return (
            <div id="recommender-button-parent">
                <button 
                    className="recommender-button apply-transition apply-radius"
                    onClick={() => {this.props.onClick()}}    
                >Get <span className="boldify apply-transition">{this.state.value}</span> Recommendations</button>
                <div className="number-of-movies">
                    <PrettoSlider 
                        id="slider"
                        step={10}
                        min={10}
                        max={100}
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}



class Recommender extends Component {

    state = {
        moviesReturned: [],
    }

    getRecommendations = () => {

        let num_recomm = document.querySelector('#slider').querySelector("input").value;

        var dataObj = {
            'ids': [...this.props.moviesStarred],
            'num': num_recomm,
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
                <RecommenderButton onClick={this.getRecommendations} value={20} />
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