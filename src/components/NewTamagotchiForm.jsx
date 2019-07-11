import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import charmander from '../assets/images/Charmander.png';
import bulbasaur from '../assets/images/Bulbasaur.png';
import squirtle from '../assets/images/Squirtle.png';

function NewTamagotchiForm(props){
  let _name = null;
  let _type = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    let image = '';
    if (_type.value == 'Charmander'){
      image = <img src={charmander} weight="200" height="200"/>;
    } else if (_type.value == 'Bulbasaur'){
      image = <img src={bulbasaur} weight="200" height="200"/>;
    } else if (_type.value == 'Squirtle'){
      image = <img src={squirtle} weight="200" height="200"/>;
    }
    props.onNewTamagotchiCreation({name: _name.value, type: _type.value, timeOpen: new Moment(), happiness: 15, tiredness: 1, hunger: 1, stage: 1, image, experence: 0, status: "alive", happinessStatus: "Happy", hungerStatus: "Full", tirednessStatus: "Rested"});
    _name.value = '';
    _type.value = '';
  }

  function handleChange(event){
    ;
  }

  return (
    <div>
      <form onSubmit={handleNewTamagotchiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <select
          type='text'
          id='type'
          ref={select => {_type = select}}>
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Charmander">Charmander</option>
            <option value="Squirtle">Squirtle</option>
          </select>
        <button type='submit'>Create Tamagotchi</button>
      </form>
    </div>
    );
  }

  NewTamagotchiForm.propTypes = {
    onNewTamagotchiCreation: PropTypes.func,
    handleChange: PropTypes.func
  };

export default NewTamagotchiForm;
