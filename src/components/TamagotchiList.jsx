import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';
import TamagotchiDetail from './TamagotchiDetail';


function TamagotchiList(props){
  let optionalSelectedTamagotchiContent = null;
  if (props.selectedTamagotchi != null) {
    optionalSelectedTamagotchiContent = <TamagotchiDetail selectedTamagotchi={props.tamagotchiList[props.selectedTamagotchi]}/>;
  }
  return (
    <div>
      {optionalSelectedTamagotchiContent}
      {Object.keys(props.tamagotchiList).map(function(tamagotchiId) {
        var tamagotchi = props.tamagotchiList[tamagotchiId];
        return <Tamagotchi name={tamagotchi.name}
          type={tamagotchi.type}
          formattedTimePassed={tamagotchi.formattedTimePassed}
          happiness={tamagotchi.happiness}
          hunger={tamagotchi.hunger}
          tiredness={tamagotchi.tiredness}
          stage={tamagotchi.stage}
          image={tamagotchi.image}
          experence={tamagotchi.experence}
          status={tamagotchi.status}
          hungerStatus={tamagotchi.hungerStatus}
          tirednessStatus={tamagotchi.tirednessStatus}
          happinessStatus={tamagotchi.happinessStatus}
          key={tamagotchi.id}
          onTamagotchiSelection={props.onTamagotchiSelection}
          tamagotchiId={tamagotchiId}/>;
      })}
    </div>
  );
}

Tamagotchi.propTypes = {
  tamagotchiList: PropTypes.object,
  onTamagotchiSelection: PropTypes.func
};

export default TamagotchiList;
