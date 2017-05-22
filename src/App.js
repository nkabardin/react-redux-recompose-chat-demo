import React, { Component } from 'react';
import Chat from './Chat';
import './App.css';

const STATUS = {
  ONLINE: "online",
  AWAY: "away",
  PLAYING: "playing"
}

const DATA = {
  user: "Nikita",
  messages: [
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 1495478885223
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 1495478985159
    }
  ],
  textEntered: "You should kill him...",
  users: [
    {
      name: "Arash",
      status: STATUS.ONLINE,
    },
    {
      name: "Nikita",
      status: STATUS.AWAY,
      isSelf: true
    },
    {
      name: "Benjamin",
      status: STATUS.PLAYING
    }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-chat">
          <Chat
            user={DATA.user}
            messages={DATA.messages}
            textEntered={DATA.textEntered}
            users={DATA.users} />
        </div>
      </div>
    );
  }
}

export default App;
