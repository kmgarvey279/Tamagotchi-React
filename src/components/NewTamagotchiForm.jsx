import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTamagotchiForm(props){
  let _name = null;
  let _type = null;
}

function handleNewTamagotchiFormSubmission(event) {
  event.preventDefault();
  props.onNewTamagotchiCreation({name: _name.value, type: _type.value, id: v4(), timeOpen: new Moment()});
}