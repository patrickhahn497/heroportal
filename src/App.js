import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import CharacterSetup from './components/CharacterSetup/CharacterSetup';

const initialState = {
  route: "signin",
  isSignedIn: false,
  user: {
    id: '3',
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
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
      user: {
        id: '3',
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
      }
    }
  }

  loadUser = (user) => {
    //in the app level, loadUser should only have basic info like username and id
    //specifics like attributes should only be loaded when necessary like in the profile section

    console.log("WOWWW");
    console.log(user);
    // this.setState({user: {
    //   id: user.id,
    //   name: user.name,
    //   email: user.email,
    //   password: user.password
    // }});
    //instead of doing this way, we can also make it so that we have a temp object, we alter that with each fetch statement
    //and then set the final object to state afterwards
    fetch('http://localhost:3000/attributes/'+this.state.user.id)
      .then(response => response.json())
      .then(attributes => {
        if (attributes.id) {
          console.log(attributes);
          this.setState({
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              password: user.password,
              attributes: {
                str: attributes.strength,
                dex: attributes.dexterity,
                con: attributes.constitution,
                int: attributes.intelligence,
                wis: attributes.wisdom,
                cha: attributes.charisma
          }
        }})
      }
      console.log(this.state.user);
    })
  }

  onRouteChange = (route) => {
    console.log("route change");
    if (route === 'signout') {
      // this.setState({isSignedIn: false})
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  pageSwitch(route){
    switch (route) {
      default:
        return ;
    }
  }

  render() {
    return (
      <div className="wayout">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      	<div className="outer">
          <div className="container shadow-2">
            {
              // {
              //   'profile': <Profile loadUser={this.loadUser} user={this.state.user}/>,
              //   'signin': <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
              //   'register': <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>,
              //   'home': <p> oopsie daisy </p>
              // }[this.state.route]

              // <CharacterSetup id={this.state.id}/>
            }
            <Profile loadUser={this.loadUser} user={this.state.user}/>
          </div>
      	</div>
      </div>
    
    );
  }
}

export default App;
