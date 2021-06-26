import React, { Component } from 'react';
import NavBar from './NavBar';
import ActualBody from './ActualBody'
import './index.css';
import { str, profiles } from "./mv_info_string";

class App extends Component {

  state = {
    moviesStarred: new Set([]),
    currentBody: 'home',
    moviesInfo: JSON.parse(str),
    profiles: profiles,
    profileChosen: 'New',
  };

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true;
  }

  changeBody = (newBody) => {
    let lowered = newBody.toLowerCase();
    if(lowered === this.state.currentBody.toLowerCase()) {
        return;
    }
    else {
        this.setState((prevState) => ({
            ...prevState,
            currentBody: lowered,
        }));
    }
  }

  movieClicked = (id) => {
    let intid = parseInt(id);
    this.setState((prevState) => ({
      ...prevState,
      moviesStarred: prevState.moviesStarred.delete(intid) ? prevState.moviesStarred : prevState.moviesStarred.add(intid),
    }));
  }

  changeProfile = (str) => {
    this.setState((prevState) => ({
      ...prevState,
      moviesStarred: new Set(this.state.profiles[str]),
      profileChosen: str,
    }));
  }

  render() {
    return (
      <div id="App">
        <NavBar onChange={this.changeBody} />
        <ActualBody 
          screen={this.state.currentBody} 
          moviesInfo={this.state.moviesInfo} 
          moviesStarred={this.state.moviesStarred}
          movieClicked={this.movieClicked}
          profiles={this.state.profiles}
          changeProfile={this.changeProfile}
          profileChosen={this.state.profileChosen}
        />
      </div>
    );
  }
}

export default App;
