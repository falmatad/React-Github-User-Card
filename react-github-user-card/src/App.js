import React from 'react';
import axios from 'axios';
import UserCard from "./Components/UserCard";
import Followers from "./Components/Followers";
import SearchForm from "./Components/SearchForm"

class App extends React.Component {
  state = {
    userName: 'falmatad',
    user: {},
    followers: []
    
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
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

  

  render() {
    return (
      <div className="App">
        <h1>My GitHub</h1>
          <SearchForm />
          <UserCard user={this.state.user}/>
          <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
