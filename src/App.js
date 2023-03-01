import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      // <p> Sistema Solar </p>
      <div>
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
