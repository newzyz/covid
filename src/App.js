import logo from './logo.svg';
import './App.css';
import React from 'react';
import Covid from './components/Covid';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor")
    this.state = {
      data: {}
    }
  }

  componentDidMount(){
    console.log("Didmount")
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(function(response){
      console.log(response.data);
      self.setState({data: response.data});
    },
    function(error){
      console.log(error);
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <Covid data={this.state.data} />
      </header>
    </div>
  );
  }
}

export default App;
