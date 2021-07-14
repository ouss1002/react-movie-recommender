import React, { Component } from 'react';
import NavBar from './NavBar';
import ActualBody from './ActualBody'
import './index.css';
import { str, profiles } from "./mv_info_string";

class App extends Component {

  state = {
    currentBody: 'home',
    moviesInfo: JSON.parse(str),
    profiles: profiles,
    profileChosen: 'Marvel',
    moviesStarred: new Set(profiles['Marvel']),
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
    let s = this.state['profileChosen'];

    let obj = this.state;
    obj['moviesStarred'] = obj.moviesStarred.delete(intid) ? obj.moviesStarred : obj.moviesStarred.add(intid);
    obj['profiles'][s] = Array.from(obj['moviesStarred']);
    this.setState((prevState) => obj);
  }

  changeProfile = (str) => {
    this.setState((prevState) => ({
      ...prevState,
      moviesStarred: new Set(this.state.profiles[str]),
      profileChosen: str,
    }));
  }

  addProfile = (str) => {
    console.log("adding profile " + str);
    
    let s = this.state;
    let prs = s["profiles"];
    prs[str] = []
    let obj = {
      ...this.state,
      profiles: {
        ...prs,
      }
    }
    this.setState((prevState) => obj);
  }

  render() {
    return (
      <div id="App">
        <NavBar 
          onChange={this.changeBody} 
          currentBody={this.state.currentBody}
        />
        <ActualBody 
          screen={this.state.currentBody} 
          moviesInfo={this.state.moviesInfo} 
          moviesStarred={this.state.moviesStarred}
          movieClicked={this.movieClicked}
          profiles={this.state.profiles}
          changeProfile={this.changeProfile}
          profileChosen={this.state.profileChosen}
          addProfile={this.addProfile}
        />
      </div>
    );
  }
}

export default App;
