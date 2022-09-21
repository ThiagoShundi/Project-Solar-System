import React from 'react';
import Title from './Title';
// import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <header>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
      </header>
    );
  }
}

export default SolarSystem;
