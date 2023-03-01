import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          { planets.map((planet) => (<PlanetCard
            key={ planet }
            planetName={ planet.name }
            planetImage={ planet.image }
          />)) }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
