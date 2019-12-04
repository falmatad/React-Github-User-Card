import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import UserCard from "./Components/UserCard";
import Followers from "./Components/Followers";
import SearchForm from "./Components/SearchForm"

class App extends React.Component {
  state = {
    searchedName: '',
    user: {},
    followers: []
    
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/falmatad`)
      .then(res => {
        this.setState({
          user: res.data,
        });
        console.log(res.data)
      })
      .catch(err => console.log(err));

      axios
      .get(`https://api.github.com/users/falmatad/followers`)
      .then(res => {
        this.setState({
          followers: res.data,
        });
        console.log(res.data)
      })
      .catch(err => console.log(err));
    
    
  }
  
  handleChanges = e => {
    this.setState({
      searchedName: e.target.value
    });
  };
  getOtherUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchedName}`)
      .then(res => {
        this.setState({
          user: res.data,
        });
        console.log(res.data)
      })
      .catch(err => console.log(err));
    
    axios
    .get(`https://api.github.com/users/${this.state.searchedName}/followers`)
    .then(res => {
      this.setState({
        followers: res.data,
      });
      console.log(res.data)
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>My GitHub</h1>
          <SearchForm handleChanges={this.handleChanges} searchedName={this.state.searchedName} getOtherUser={this.getOtherUser}/>
          <UserCard user={this.state.user}/>
          <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
