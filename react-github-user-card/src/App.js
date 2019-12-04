import React from 'react';
import axios from 'axios';
import UserCard from "./Components/UserCard";
import Followers from "./Components/Followers";
import SearchForm from "./Components/SearchForm"
import styled from "styled-components";


const AppContainer = styled.form`
    display:flex;
    flex-direction:column;
    justify-content; center;

    h1 {
      text-align: center;
    }
`


class App extends React.Component {
  state = {
    activity: [],
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

      axios
      .get(`https://github-contributions-api.now.sh/v1/falmatad`)
      .then(res => {
        this.setState({
          activity: res.data.contributions,
        });
        console.log(res.data.contributions)
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
          <AppContainer>
            <h1>Lookup a Candidate's Github Profile</h1>
            <SearchForm handleChanges={this.handleChanges} searchedName={this.state.searchedName} getOtherUser={this.getOtherUser}/>
            <UserCard user={this.state.user} activity={this.state.activity}/>
            <Followers followers={this.state.followers}/>
          </AppContainer>
      </div>
    );
  }
}

export default App;
