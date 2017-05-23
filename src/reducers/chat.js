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
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 1495478885224
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 14954788852
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 1495478
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 14954789855
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 14954788852266
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 1495478985333
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 1495478885222
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898513333
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888555432
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 14954789851345
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888576543
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898516545678
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522311
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515912
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522313
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515914
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522315
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515916
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522317
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515918
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522319
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515920
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522321
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515922
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522323
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515924
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522325
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me",
      timestamp: 149547898515926
    },
    {
      sender: "Arash",
      text: "I want to kill Benjamin",
      timestamp: 149547888522327
    },
    {
      sender: "Benjamin",
      text: "Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. Please don't kill me. ",
      timestamp: 149547898515928
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
