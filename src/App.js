import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails';
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
            <NavLink to="/unicorns" className="nav">Unicorns</NavLink>
            <NavLink to="/puppies" className="nav">Puppies</NavLink>
            <NavLink to="/sharks" className="nav">Sharks</NavLink>
        </header>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/unicorns" render={() => <Creatures data={unicornData} />} />
          <Route exact path="/puppies" render={() => <Creatures data={puppyData} />} />
          <Route exact path="/sharks" render={() => <Creatures data={sharkData} />} />
          <Route exact path="/unicorns/:id" render={({ match }) => {
            const { id } = match.params
            const selected = unicornData.find(unicorn => unicorn.id == id)
            return selected && <CreatureDetails {...selected}/>
          }}/>
          <Route exact path="/puppies/:id" render={({ match }) => {
            const { id } = match.params
            const selected = puppyData.find(puppy => puppy.id == id)
            return selected && <CreatureDetails {...selected}/>
          }}/>
          <Route exact path="/sharks/:id" render={({ match }) => {
            const { id } = match.params
            const selected = sharkData.find(shark => shark.id == id)
            return selected && <CreatureDetails {...selected}/>
          }}/>
           {/* <Route exact path="/:creatures/:id" render={({ match }) => {
            const { id, creatures } = match.params
            const selected = `${creature}Data.find(${creature} => ${creature}.id == id)
            return selected && <CreatureDetails {...selected}/>`
          }}/> */}
      </main>
    );
  }
}
