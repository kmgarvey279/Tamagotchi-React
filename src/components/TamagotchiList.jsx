import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.tamagotchiList.map((tamagotchi) =>
        <Tamagotchi name={tamagotchi.name}
          type={tamagotchi.type}
          formattedTimePassed={tamagotchi.formattedTimePassed}  
          key={tamagotchi.id}/>
      )}
    </div>
  };
}

Tamagotchi.propTypes = {
  TicketList: PropTypes.array
};
  
export default NewTamagotchiControl;