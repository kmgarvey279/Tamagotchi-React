import React from 'react';
import PropTypes from 'prop-types';
import toy from '../assets/images/toy.png';
import sleep from '../assets/images/sleep.png';
import food from '../assets/images/food.png';


function Tamagotchi(props){

  const tamagotchiInformation =
    <div id="info">
      <h3>Name: {props.name}</h3>
      <h4>Type: {props.type} Stage: {props.stage}/4</h4>
      {props.image}
      <h4>Time since adoption: {props.formattedTimePassed}</h4>
      <h4>Experence: {props.experence}</h4>
      <h5>Current Happiness Level: {props.happiness} {props.happinessStatus}</h5>
      <h5>Current Hunger Level: {props.hunger} {props.hungerStatus}</h5>
      <h5>Current Tiredness Level: {props.tiredness} {props.tirednessStatus}</h5>
    </div>;

    const tamagotchiActions =
    <div id="actions">
      <h3>Actions</h3>
      <div id="play">
        <h3>Play</h3>
        <img src={toy} weight="75" height="75" onClick={() => {props.onPlayButtonClick(props.tamagotchiId);}}/>
      </div>
      <div id="sleep">
        <h3>Sleep</h3>
        <img src={sleep} weight="75" height="75" onClick={() => {props.onSleepButtonClick(props.tamagotchiId);}}/>
      </div>
      <div id="feed">
        <h3>Feed</h3>
        <img src={food} weight="75" height="75" onClick={() => {props.onFeedButtonClick(props.tamagotchiId);}}/>
      </div>
    </div>;

//conditional styling
    if (props.status == "dead") {
      return (
        <div id="dead" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#dead {
              background-color: gray;
              filter: gray;
              -webkit-filter: grayscale(1);
              filter: grayscale(1);
              break-inside: avoid-column;
              text-align: center;
              columns: 2 auto;
              border: solid darkgray 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
            {tamagotchiInformation}
            {tamagotchiActions}
        </div>
      );
    } else if (props.happiness < 5 || props.hunger > 15  || props.tiredness > 15) {
      return (
        <div id="warning" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#warning {
              background-color: FireBrick;
              text-align: center;
              columns: 2 auto;
              border: solid darkred 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Squirtle") {
      return (
        <div id="squirtle" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#squirtle {
              background-color: lightblue;
              border: solid blue 5px;
              text-align: center;
              columns: 2 auto;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Wartortle") {
      return (
        <div id="wartortle" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#wartortle {
              background-color: lightskyblue;
              border: solid blue 5px;
              text-align: center;
              columns: 2 auto;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Blastoise") {
      return (
        <div id="blastoise" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#blastoise {
              background-color: dodgerblue;
              border: solid blue 5px;
              text-align: center;
              columns: 2 auto;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Mega Blastoise") {
      return (
        <div id="megablastoise" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#megablastoise {
              background-color: steelblue;
              border: solid blue 5px;
              text-align: center;
              columns: 2 auto;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Charmander") {
      return (
        <div id="charmander" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#charmander {
              background-color: lightsalmon;
              text-align: center;
              columns: 2 auto;
              border: solid red 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Charmeleon") {
      return (
        <div id="charmeleon" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#charmeleon {
              background-color: darkorange;
              text-align: center;
              columns: 2 auto;
              border: solid red 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Charizard") {
      return (
        <div id="charizard" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#charizard {
              background-color: red;
              text-align: center;
              columns: 2 auto;
              border: solid red 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Mega Charazard") {
      return (
        <div id="megacharizard" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#megacharizard {
              background-color: darkred;
              text-align: center;
              columns: 2 auto;
              border: solid red 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Bulbasaur") {
      return (
        <div id="bulbasaur" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#bulbasaur {
              background-color: lightgreen;
              text-align: center;
              columns: 2 auto;
              border: solid green 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Ivysaur") {
      return (
        <div id="ivysaur" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#ivysaur {
              background-color: mediumseagreen;
              text-align: center;
              columns: 2 auto;
              border: solid green 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Venusaur") {
      return (
        <div id="venusaur" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#venusaur {
              background-color: seagreen;
              text-align: center;
              columns: 2 auto;
              border: solid green 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
        </div>
      );
    } else if (props.type == "Mega Venusaur") {
      return (
        <div id="megavenusaur" onClick={() => {props.onTamagotchiSelection(props.tamagotchiId);}}>
          <style jsx>{`
            div#megavenusaur {
              background-color: darkgreen;
              text-align: center;
              columns: 2 auto;
              border: solid green 5px;
              margin-bottom 10px;
            }
            div#info {
              break-inside: avoid-column;
            }
            div#actions {
              break-inside: avoid-column;
            }
            div#sleep {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: blue;
            }
            div#play {
              margin-top: 20px;
              margin-bottom: 10px;
              background-color: yellow;
            }
            div#feed {
              margin-bottom: 10px;
              margin-top: 10px;
              background-color: red;
            }
          `}</style>
          {tamagotchiInformation}
          {tamagotchiActions}
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
  onPlayButtonClick: PropTypes.func,
  onFeedButtonClick: PropTypes.func,
  onSleepButtonClick: PropTypes.func,
  tamagotchiId: PropTypes.string.isRequired
};

export default Tamagotchi;
