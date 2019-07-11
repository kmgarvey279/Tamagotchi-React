import React from 'react';
import PropTypes from 'prop-types';


function Tamagotchi(props){
  const tamagotchiInformation =
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Type: {props.type} Stage: {props.stage}/4</h4>
      {props.image}
      <h4>Time since adoption: {props.formattedTimePassed}</h4>
      <h4>Experence: {props.experence}</h4>
      <h5>Current Happiness Level: {props.happiness} {props.happinessStatus}</h5>
      <h5>Current Hunger Level: {props.hunger} {props.hungerStatus}</h5>
      <h5>Current Tiredness Level: {props.tiredness} {props.tirednessStatus}</h5>
    </div>;
    if (props.status == "dead") {
      return (
        <div id="thisTamagotchi" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#thisTamagotchi {
              background-color: gray;
            }
            img {
              filter: gray;
              -webkit-filter: grayscale(1);
              filter: grayscale(1);
            }
          `}</style>
          {tamagotchiInformation}
        </div>
      );
    } else if (props.happiness < 5 || props.hunger > 15  || props.tiredness > 15) {
      return (
        <div id="thisTamagotchi" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#thisTamagotchi {
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
        </div>
      );
    } else {
      return (
        <div id="thisTamagotchi" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#thisTamagotchi {
              background-color: green;
            }
          `}</style>
          {tamagotchiInformation}
        </div>
      );
    }
  }

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formattedTimePassed: PropTypes.string.isRequired,
  happiness: PropTypes.number.isRequired,
  hunger: PropTypes.number.isRequired,
  tiredness: PropTypes.number.isRequired,
  stage: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  experence: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  happinessStatus: PropTypes.string.isRequired,
  hungerStatus: PropTypes.string.isRequired,
  tirednessStatus: PropTypes.string.isRequired,
  onTamagotchiSelection: PropTypes.func,
  tamagotchiId: PropTypes.string.isRequired
};

export default Tamagotchi;
