import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import { useState } from "react";
import './Style.css'


function Player() {
  return(
    <div className = 'wrapper'>
    <h2 className = "pageheader">
        Teams & Players
    </h2>
        <br></br>
      <PlayerMount />
      <PlayerOfTheDay/>
      <TeamMount />
      
    </div>

  );
}


 function PlayerOfTheDay(){
  var today = new Date();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var year = today.getFullYear();
   return (
     <div className="potd">
      <h3>Player of the Day {month}/{day}/{year}</h3>
      <img src='images/Lebron.jpeg'></img>
      <h4>Lebron James</h4>
      <h5>
      Career Stats<br/>
       <h6>
         G: 1366 <br/>
         PTS: 27.1<br/>
         TRB: 7.5<br/>
         AST: 7.4<br/>
         FG%: 50.5<br/>
         FG3%: 34.6<br/>
         FT%: 73.4<br/>
         eFG%: 54.5
       </h6>
      </h5>
     </div>
   )
 }



class TeamMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team:[]
    };
  }


  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '714175ce39mshc175e3a1c1dd1f3p161e71jsndd6a5ded4afe'
      }
    };
    
    fetch('https://free-nba.p.rapidapi.com/teams?page=0', options)
      .then(response => response.json())
      .then(response => {
        this.setState({
        team: response.data
      })
    })
    
      .catch(err => console.error(err));
  }

  render() {
    const {team} = this.state;
    let teamHolder;
      return (
        <p>
        {teamHolder = team.map(teams => (
                <h5 className = 'teamlist'>
                  {teams.full_name}
                </h5>
          ))}
        </p>
      
      );
    }
}

class PlayerMount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player:[],
      playerLookup:''
    };
  }

  searchFunc = (event) =>{
    this.setState({playerLookup:event.target.value});
  }

  searchHandler = (event) => {
        event.preventDefault();  
        this.componentDidMount();
      }

  componentDidMount() {
    const playerLookup = this.state.playerLookup
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
        'X-RapidAPI-Key': '714175ce39mshc175e3a1c1dd1f3p161e71jsndd6a5ded4afe'
      }
    };
    
    fetch('https://free-nba.p.rapidapi.com/players?page=0&per_page=1&search='+ playerLookup, options)
      .then(response => response.json())
      .then(response => {
        this.setState({
        player: response.data
      })
    })
    
      .catch(err => console.error(err));
  }

  render() {
    const {player} = this.state;
    let playerHolder;
      return (
        <div className='playerdetails'>
        {playerHolder = player.map(players => (              
           <p>
           <h3>Player Search Result</h3> 
           <img src='images/NBALogo.png' style={{width:'150px', height:'150px'}}></img><br/>
           {players.first_name} {players.last_name} <br/> Team: {players.team.full_name} <br/> Division: {players.team.division} <br/> Position: {players.position} <br/> Height: {players.height_feet}ft {players.height_inches}in
           <br/><br/>
           </p>
          ))}
          <label>
               <input type='text' onChange={this.searchFunc}></input><br/><br/>
               <button type='button' onClick={this.searchHandler}>Search</button>
          </label>
        </div>
      );
    }
}

export default Player;