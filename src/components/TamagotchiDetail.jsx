import React from 'react';
import PropTypes from 'prop-types';

function TamagotchiDetail(props){
  return (
    <div>
      <hr/>
      <h2>{props.selectedTamagotchi.name}</h2>
      <h4>Type: {props.selectedTamagotchi.type} Stage: {props.selectedTamagotchi.stage}/4</h4>
      <h4>Happiness: {props.selectedTamagotchi.happiness}</h4>
      <h4>Tiredness: {props.selectedTamagotchi.tiredness}</h4>
      <h4>Hunger: {props.selectedTamagotchi.hunger}</h4>
      <hr/>
      <button>Feed</button>
      <button>Play</button>
      <button>Sleep</button>
    </div>
  );
}

TamagotchiDetail.propTypes = {
  selectedTamagotchi: PropTypes.object
};

export default TamagotchiDetail;
