import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Sistema Solar</p>
        <Header />
        <SolarSystem />
        {/* <Title /> */}
      </div>
    );
  }
}

export default App;
