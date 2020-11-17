import './App.css';
import React from 'react';
import Game from './components/Board';


class App extends React.Component{
  render(){
    return(
      <div>
      {/*<h1 className="App">LeapYear App</h1>*/}
      <Game />
      </div>
    )
  }
}

export default App;
