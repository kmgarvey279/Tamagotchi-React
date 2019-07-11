import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import NewTamagotchiForm from './NewTamagotchiForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import { v4 } from 'uuid';

import charmeleon from '../assets/images/Charmeleon.png';
import charizard from '../assets/images/Charizard.png';
import megacharizard from '../assets/images/MegaCharizard.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: {},
      selectedTamagotchi: null
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
    this.handleChangingSelectedTamagotchi = this.handleChangingSelectedTamagotchi.bind(this);
  }

  componentDidMount() {
    this.timePassedUpdateTimer = setInterval(() =>
      this.updateTamagotchiTime(),
    6000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timePassedUpdateTimer);
  }

  updateTamagotchiTime() {
      var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
      Object.keys(newMasterTamagotchiList).forEach(tamagotchiId => {
        if (newMasterTamagotchiList[tamagotchiId].status == 'alive') {
            newMasterTamagotchiList[tamagotchiId].formattedTimePassed = newMasterTamagotchiList[tamagotchiId].timeOpen.fromNow(true);
            newMasterTamagotchiList[tamagotchiId].experence = newMasterTamagotchiList[tamagotchiId].experence + 1;
          }
        });
        this.updateHunger();
        this.updateTiredness();
        this.updateHappiness();
        this.evolve();
        this.setState({masterTamagotchiList: newMasterTamagotchiList});
      }

  updateHunger() {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    Object.keys(newMasterTamagotchiList).forEach(tamagotchiId => {
      newMasterTamagotchiList[tamagotchiId].hunger = newMasterTamagotchiList[tamagotchiId].hunger + 1
      if (newMasterTamagotchiList[tamagotchiId].hunger >=20) {
        newMasterTamagotchiList[tamagotchiId].hungerStatus = "dead";
        newMasterTamagotchiList[tamagotchiId].status = "dead";
      }
      else if (newMasterTamagotchiList[tamagotchiId].hunger >= 15) {
        newMasterTamagotchiList[tamagotchiId].hungerStatus = "very hungry";
      }
      else if (newMasterTamagotchiList[tamagotchiId].hunger >= 10) {
        newMasterTamagotchiList[tamagotchiId].hungerStatus = "hungry";
      }
    });
  }

  updateHappiness() {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    Object.keys(newMasterTamagotchiList).forEach(tamagotchiId => {
      newMasterTamagotchiList[tamagotchiId].happiness = newMasterTamagotchiList[tamagotchiId].happiness - 1
      if (newMasterTamagotchiList[tamagotchiId].happiness <= 0) {
        newMasterTamagotchiList[tamagotchiId].happinessStatus = "Dead";
        newMasterTamagotchiList[tamagotchiId].status = "dead";
      }
      else if (newMasterTamagotchiList[tamagotchiId].happiness <= 5) {
        newMasterTamagotchiList[tamagotchiId].happinessStatus = "Very unhappy";
      }
      else if (newMasterTamagotchiList[tamagotchiId].hunger <= 10) {
        newMasterTamagotchiList[tamagotchiId].happinessStatus = "Unhappy";
      }
    });
  }

  updateTiredness() {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    Object.keys(newMasterTamagotchiList).forEach(tamagotchiId => {
      newMasterTamagotchiList[tamagotchiId].tiredness = newMasterTamagotchiList[tamagotchiId].tiredness + 1
      if (newMasterTamagotchiList[tamagotchiId].tiredness >= 20) {
        newMasterTamagotchiList[tamagotchiId].tirednessStatus = "Dead";
        newMasterTamagotchiList[tamagotchiId].status = "dead";
      }
      else if (newMasterTamagotchiList[tamagotchiId].tiredness >= 15) {
        newMasterTamagotchiList[tamagotchiId].tirednessStatus = "Very Tired";
      }
      else if (newMasterTamagotchiList[tamagotchiId].hunger >= 10) {
        newMasterTamagotchiList[tamagotchiId].tirednessStatus = "Tired";
      }
    });
  }

  evolve(){
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    Object.keys(newMasterTamagotchiList).forEach(tamagotchiId => {
      if (newMasterTamagotchiList[tamagotchiId].experence >= 10 || newMasterTamagotchiList[tamagotchiId].stage > 4) {
        newMasterTamagotchiList[tamagotchiId].stage = newMasterTamagotchiList[tamagotchiId].stage + 1;
        newMasterTamagotchiList[tamagotchiId].experence = 0;
        if (newMasterTamagotchiList[tamagotchiId].type == 'charmander') {
          newMasterTamagotchiList[tamagotchiId].type = 'charmeleon';
          newMasterTamagotchiList[tamagotchiId].image = <img src={charmeleon} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[tamagotchiId].type == 'charmeleon') {
          newMasterTamagotchiList[tamagotchiId].type = 'charizard';
          newMasterTamagotchiList[tamagotchiId].image = <img src={charizard} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[tamagotchiId].type == 'charizard') {
          newMasterTamagotchiList[tamagotchiId].type = 'mega charazard';
          newMasterTamagotchiList[tamagotchiId].image = <img src={megacharizard} weight="200" height="200"/>
        }
      }
    });
  }

  handleAddingNewTamagotchiToList(newTamagotchi){
    var newTamagotchiId = v4();
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList, {
      [newTamagotchiId]: newTamagotchi
    });
    newMasterTamagotchiList[newTamagotchiId].formattedTimePassed = newMasterTamagotchiList[newTamagotchiId].timeOpen.fromNow(true);
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }

  handleChangingSelectedTamagotchi(newTamagotchiId){
    this.setState({selectedTamagotchi: newTamagotchiId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} onTamagotchiSelection={this.handleChangingSelectedTamagotchi} selectedTamagotchi={this.state.selectedTamagotchi} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
