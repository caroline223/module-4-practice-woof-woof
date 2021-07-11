import React from 'react';
import './App.css';
import PupInfo from '../src/Components/PupInfo'

class App extends React.Component {

  state = {
    allPups: [],
    selectedPup: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pups/')
    .then(response => response.json())
    .then(pups => this.setState({
      allPups: pups
    }))
  }

  

  clickedPup = (pup) => {
    this.setState({
      selectedPup: pup
    })
  }

  togglePup = (event) => {
    event.persist()
    let goodPup = !this.state.selectedPup.isGoodDog
    let URL = `http://localhost:3000/pups/${this.state.selectedPup.id}`

    fetch( URL, {
      method: 'PATCH',
      headers: {
        'Content-type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        isGoodDog : goodPup
      })
    })
    .then(response => response.json())
    .then(newPup => {
      this.setState({
        selectedPup: newPup
      })
    })
  }

    
  render(){
    return (
      <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter">Filter good dogs: OFF</button>
        </div>
        <div id="dog-bar">
           {this.state.allPups.map((pup, id) => <PupInfo  key={id} pup={ pup } handleClick={this.clickedPup} />)}
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            <img src={this.state.selectedPup.image}></img>
            <h2>{this.state.selectedPup.name}</h2>
            <button onClick={this.togglePup}>{this.state.selectedPup.isGoodDog ? "GOOD DOG" : "BAD DOG"}</button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
