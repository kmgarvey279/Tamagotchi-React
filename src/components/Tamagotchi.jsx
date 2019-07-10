import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(promps){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Type: {props.type}</h4>
      <h4>Age: {props.formattedTimePassed}</h4>
    </div>  
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  formattedTimePassed: PropTypes.string.isRequired,
};

export default Tamagotchi;