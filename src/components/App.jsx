import React from 'react';
import Header from './Header';
import TamagotchiList from './TamagotchiList';
import NewTamagotchiForm from './NewTamagotchiForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import { v4 } from 'uuid';
//Charmander Line Images
import charmeleon from '../assets/images/Charmeleon.png';
import charizard from '../assets/images/Charizard.png';
import megacharizard from '../assets/images/MegaCharizard.png';
//Bulbasaur Line Images
import ivysaur from '../assets/images/Ivysaur.png';
import venusaur from '../assets/images/Venusaur.png';
import megavenusaur from '../assets/images/MegaVenusaur.png';
//Squirtle Line Images
import wartortle from '../assets/images/Wartortle.png';
import blastoise from '../assets/images/Blastoise.png';
import megablastoise from '../assets/images/MegaBlastoise.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: {},
      selectedTamagotchi: null
    };
    this.handleAddingNewTamagotchiToList = this.handleAddingNewTamagotchiToList.bind(this);
    this.handleChangingSelectedTamagotchi = this.handleChangingSelectedTamagotchi.bind(this);
    this.feed = this.feed.bind(this);
    this.sleep = this.sleep.bind(this);
    this.play = this.play.bind(this);
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
        newMasterTamagotchiList[tamagotchiId].hunger = newMasterTamagotchiList[tamagotchiId].hunger + 1;
        newMasterTamagotchiList[tamagotchiId].happiness = newMasterTamagotchiList[tamagotchiId].happiness - 1;
        newMasterTamagotchiList[tamagotchiId].tiredness = newMasterTamagotchiList[tamagotchiId].tiredness + 1;
        this.updateHunger(tamagotchiId);
        this.updateTiredness(tamagotchiId);
        this.updateHappiness(tamagotchiId);
        this.evolve(tamagotchiId);
      }
    });
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }

updateHunger(id) {
  var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    if (newMasterTamagotchiList[id].hunger >=20) {
      newMasterTamagotchiList[id].hungerStatus = "dead";
      newMasterTamagotchiList[id].status = "dead";
    }
    else if (newMasterTamagotchiList[id].hunger >= 15) {
      newMasterTamagotchiList[id].hungerStatus = "very hungry";
    }
    else if (newMasterTamagotchiList[id].hunger >= 10) {
      newMasterTamagotchiList[id].hungerStatus = "hungry";
  }
}

  updateHappiness(id) {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
      if (newMasterTamagotchiList[id].happiness <= 0) {
        newMasterTamagotchiList[id].happinessStatus = "Dead"
        newMasterTamagotchiList[id].status = "dead";
      }
      else if (newMasterTamagotchiList[id].happiness <= 5) {
        newMasterTamagotchiList[id].happinessStatus = "Very unhappy";
      }
      else if (newMasterTamagotchiList[id].happiness <= 10) {
        newMasterTamagotchiList[id].happinessStatus = "Unhappy";
    }
  }

  updateTiredness(id) {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
      if (newMasterTamagotchiList[id].tiredness >= 20) {
        newMasterTamagotchiList[id].tirednessStatus = "Dead";
        newMasterTamagotchiList[id].status = "dead";
      }
      else if (newMasterTamagotchiList[id].tiredness >= 15) {
        newMasterTamagotchiList[id].tirednessStatus = "Very Tired";
      }
      else if (newMasterTamagotchiList[id].hunger >= 10) {
        newMasterTamagotchiList[id].tirednessStatus = "Tired";
    }
  }

  evolve(id){
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
      if (newMasterTamagotchiList[id].experence >= 10 || newMasterTamagotchiList[id].stage > 4) {
        newMasterTamagotchiList[id].stage = newMasterTamagotchiList[id].stage + 1;
        newMasterTamagotchiList[id].experence = 0;
        //Charmander Line Evolutions
        if (newMasterTamagotchiList[id].type == 'Charmander') {
          newMasterTamagotchiList[id].type = 'Charmeleon';
          newMasterTamagotchiList[id].image = <img src={charmeleon} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'Charmeleon') {
          newMasterTamagotchiList[id].type = 'Charizard';
          newMasterTamagotchiList[id].image = <img src={charizard} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'charizard') {
          newMasterTamagotchiList[id].type = 'Mega Charazard';
          newMasterTamagotchiList[id].image = <img src={megacharizard} weight="200" height="200"/>
        }
        //Squirtle Line Evolutions
        if (newMasterTamagotchiList[id].type == 'Squirtle') {
          newMasterTamagotchiList[id].type = 'Wartortle';
          newMasterTamagotchiList[id].image = <img src={wartortle} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'Wartortle') {
          newMasterTamagotchiList[id].type = 'Blastoise';
          newMasterTamagotchiList[id].image = <img src={blastoise} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'Blastoise') {
          newMasterTamagotchiList[id].type = 'Mega Blastoise';
          newMasterTamagotchiList[id].image = <img src={megablastoise} weight="200" height="200"/>
        }
        //Bulbasaur Line Evolutions
        if (newMasterTamagotchiList[id].type == 'Bulbasaur') {
          newMasterTamagotchiList[id].type = 'Ivysaur';
          newMasterTamagotchiList[id].image = <img src={ivysaur} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'Ivysaur') {
          newMasterTamagotchiList[id].type = 'Venusaur';
          newMasterTamagotchiList[id].image = <img src={venusaur} weight="200" height="200"/>
        }
        else if (newMasterTamagotchiList[id].type == 'Venusaur') {
          newMasterTamagotchiList[id].type = 'Mega Venusaur';
          newMasterTamagotchiList[id].image = <img src={megavenusaur} weight="200" height="200"/>
        }
      }
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

  play(id) {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    if (newMasterTamagotchiList[id].happiness > 15){
      newMasterTamagotchiList[id].happiness = 20;
    } else {
      newMasterTamagotchiList[id].happiness = newMasterTamagotchiList[id].happiness + 5;
    }
  }

  feed(id) {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    if (newMasterTamagotchiList[id].hunger < 5) {
      newMasterTamagotchiList[id].hunger = 0;
    } else {
      newMasterTamagotchiList[id].hunger = newMasterTamagotchiList[id].hunger - 5;
    }
  }

  sleep(id) {
    var newMasterTamagotchiList = Object.assign({}, this.state.masterTamagotchiList);
    if (newMasterTamagotchiList[id].tiredness < 5) {
      newMasterTamagotchiList[id].tiredness = 0;
    } else {
      newMasterTamagotchiList[id].tiredness = newMasterTamagotchiList[id].sleep - 5;
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchiList} onTamagotchiSelection={this.handleChangingSelectedTamagotchi} onFeedButtonClick={(id) => this.feed(id)} onPlayButtonClick={(id) => this.play(id)} onSleepButtonClick={(id) => this.sleep(id)} selectedTamagotchi={this.state.selectedTamagotchi} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
