import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import CharacterSetup from './components/CharacterSetup/CharacterSetup';
import Home from './components/Home/Home';
import ContractPosting from './components/ContractPosting/ContractPosting';
import ContractSetup from './components/ContractSetup/ContractSetup';
import MyJobs from './components/MyJobs/MyJobs';


const initialState = {
  route: "home",
  isSignedIn: false,
  user: {
    id: -1,
    // id: 3,
    name: '',
    email: '',
    password: '',
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    }
  },
  jobid : 0,
  profileid: 0

}
const testState = {
  route: "myjobs",
  isSignedIn: true,
  user: {
    id: 22,
    name: 'Bobaron',
    email: '',
    password: '',
    attributes: {
      str: 10,
      dex: 10,
      con: 10,
      int: 10,
      wis: 10,
      cha: 10
    }
  },
  jobid : 0,
  profileid: 0
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
    // this.state = testState;

  }

  loadUser = (user) => {
    //in the app level, loadUser should only have basic info like username and id
    //specifics like attributes should only be loaded when necessary like in the profile section

    console.log("user id loaded: " , user);

    if (user.id){
      console.log("valid user id: " , user.id);
      this.setState({user: {
              id: user.id,
              name: user.name,
              email: user.email,
              // password: user.password,
        }});
      this.setState({isSignedIn: true});
    }
  }
  

  onRouteChange = (route) => {
    console.log("route change");
    if (route === 'signout') {
      this.setState({isSignedIn: false});
      this.setState({route: "home"});
      this.setState(initialState);
    } 
    this.setState({route: route});
  }

  onJobChange = (newjobid) => {
    this.setState({jobid: newjobid});
    this.setState({route: 'contractposting'});
  }

  onProfileChange = (newprofileid) => {
    this.setState({profileid: newprofileid});
    this.setState({route: 'profile'});
  }

  setProperty = (property, item) => {
    // console.log("wow", item);
    this.setState({[property]: item });
    //console.log(this.state[property]);
    console.log("state", this.state)

  }

  pageSwitch(route) {
    switch (route) {
      case "home":
        this.setState({route: "home"});
      case "profile":
        this.setState({route: "profile"});
      case "register":
        this.setState({route: "register"});
      case "charactersetup":
        this.setState({route: "charactersetup"});
      case "contractposting":
        this.setState({route: "contractposting"});
      default:
        return ;
    }
  }

  render() {
    return (
      <div className="wayout">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} pageSwitch={this.pageSwitch}/>
        {
          (this.state.route==="home") 
          ? <Home />:
        	<div className="outer">
            <div className="midcontainer shadow-2">
              {
                {
                  'profile': <Profile loadUser={this.loadUser} user={this.state.user}/>,
                  'signin': <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
                  'register': <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
                  'charactersetup': <CharacterSetup id={this.state.user.id} onRouteChange={this.onRouteChange} />,
                  'contractposting': <ContractPosting user={this.state.user} jobid={this.state.jobid}/>,
                  'home': <Home/>,
                  'contractsetup': <ContractSetup employerid={this.state.user.id} pageSwitch={this.onRouteChange} onJobChange={this.onJobChange}/>,
                  'myjobs': <MyJobs user={this.state.user} onJobChange={this.onJobChange} onProfileChange={this.onProfileChange}/>
                }[this.state.route]

                //<Profile loadUser={this.loadUser} user={this.state.user}/>

                //<CharacterSetup id={this.state.user.id}/>
                //<ContractPosting user={this.state.user} jobid={1}/>
                // <ContractSetup employerid={'1'} pageSwitch={this.pageSwitch}/>

              }
              
            </div>
        	</div>
        }
      </div>
    
    );
  }
}

export default App;
