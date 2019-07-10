import React from 'react';
import Header from './Header';
import MyTamagotchi from './MyTamagotchi';
import NewTamagotchiControl from './NewTamagotchiControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchiList: []
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }
  
  componentDidMount() {
    this.timePassedUpdateTimer = setInterval(() =>
      this.updateTamagotchiTime(),
    5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timePassedUpdateTimer);
  }
  
  updateTamagotchiTime() {
    let newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.forEach((tamagotchi) =>
      tamagotchi.formattedTimePassed = (tamagotchi.timeOpen).fromNow(true)
    );
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }
  
  handleAddingNewTamagotchiToList(newTamagotchi){
    var newMasterTamagotchiList = this.state.masterTicketList.slice();
    newTamagotchi.formattedTimePassed = (newTamagotchi.timeOpen).fromNow(true);
    newMasterTamagotchiList.push(newTamagotchi);
    this.setState({masterTamagotchiList: newMasterTamagotchiList});
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList TamagotchiList={this.state.masterTamagotchiList} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiControl onNewTamagotchi={this.handleAddingNewTamagotchiToList}>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;  