import React, { Component } from 'react';
import NavBar from './NavBar';
import ActualBody from './ActualBody'
import './index.css';
import str from "./mv_info_string";

class App extends Component {

  state = {
    moviesStarred: new Set([1,2,3,4,5]),
    currentBody: 'home',
    moviesInfo: JSON.parse(str),
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

  render() {
    return (
      <div id="App">
        <NavBar onChange={this.changeBody} />
        <ActualBody 
          screen={this.state.currentBody} 
          moviesInfo={this.state.moviesInfo} 
          moviesStarred={this.state.moviesStarred}
          movieClicked={this.movieClicked}
        />
      </div>
    );
  }
}

export default App;
