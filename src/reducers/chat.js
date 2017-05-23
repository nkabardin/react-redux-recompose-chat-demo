const STATUS = {
  ONLINE: "online",
  AWAY: "away",
  PLAYING: "playing"
}

const DEFAULT_STATE = {
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


export default (state = DEFAULT_STATE, action) => state
