import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './styles/Mission.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" className="missionTitle" />
        <div className="missionsDiv">
          { missions.map((mission) => (<MissionCard
            key={ mission }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />)) }
        </div>
      </div>
    );
  }
}

export default Missions;
