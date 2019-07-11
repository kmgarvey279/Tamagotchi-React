import React from 'react';
import PropTypes from 'prop-types';

function TamagotchiDetail(props){
  return (
    <div id="detail">
    <style jsx>{`
      div#detail {
        background-color: yellow;
        border: solid orange 5px;
      }
    `}</style>
      <h2>Pokemon Details:</h2>
      <h4>Name: {props.selectedTamagotchi.name}</h4>
      <h4>Type: {props.selectedTamagotchi.type}</h4>
      <h4>Stage: {props.selectedTamagotchi.stage}/4</h4>
      <h4>Exp: {props.selectedTamagotchi.experence}/20</h4>
      <h4>Time since adoption: {props.selectedTamagotchi.formattedTimePassed}</h4>
      <h4>Status: {props.selectedTamagotchi.status}</h4>
      <h4>Happiness: {props.selectedTamagotchi.happiness}</h4>
      <h4>Tiredness: {props.selectedTamagotchi.tiredness}</h4>
      <h4>Hunger: {props.selectedTamagotchi.hunger}</h4>
    </div>
  );
}


TamagotchiDetail.propTypes = {
  selectedTamagotchi: PropTypes.object,
};

export default TamagotchiDetail;
