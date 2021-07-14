import React, { Component } from 'react';
import Home from './Home';
import Browse from './Browse';
import Recommender from './Recommender';
import Results from './Results';
import AboutUs from './AboutUs';
import Liked from './Liked';
import Profiles from './Profiles'

class ActualBody extends Component {

  render() {
    let props = this.props;
    return (
      <div id="actual-body">
        {props.screen === 'home' && <Home />}
        {props.screen === 'browse' && 
          <Browse 
            moviesInfo={props.moviesInfo} 
            moviesStarred={props.moviesStarred} 
            movieClicked={props.movieClicked}
          />
        }
        {props.screen === 'recommender' && 
          <Recommender 
            moviesInfo={props.moviesInfo} 
            moviesStarred={props.moviesStarred} 
            movieClicked={props.movieClicked}
          />
        }
        {props.screen === 'liked' && 
          <Liked 
            moviesInfo={props.moviesInfo} 
            moviesStarred={props.moviesStarred} 
            movieClicked={props.movieClicked}
          />
        }
        {props.screen === 'profiles' && 
          <Profiles 
            profiles={props.profiles}
            changeProfile={props.changeProfile}
            profileChosen={props.profileChosen}
            addProfile={props.addProfile}
          />
        }
        {props.screen === 'results' && <Results />}
        {props.screen === 'about us' && <AboutUs />}
      </div>
    );
  }
}

export default ActualBody;
