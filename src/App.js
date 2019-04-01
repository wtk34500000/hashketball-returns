import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import {connect} from 'react-redux'
import 'semantic-ui-css/semantic.min.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList />
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails />}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {selectedPlayer: state.selectedPlayer}
}

export default connect(mapStateToProps)(App);
