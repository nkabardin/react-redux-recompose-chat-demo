import {
  ENTER_MESSAGE,
  SEND_MESSAGE,
  JOIN,
  CHANGE_STATUS
} from './actionTypes'
import {ONLINE, AWAY, PLAYING} from './chatStatuses'

const INITIAL_STATE = {
  user: "GeorgeMartin",
  messages: [],
  textEntered: "",
  users: [
    {
      name: "GeorgeMartin",
      status: {type: ONLINE},
    }
  ]
}

const getTimestamp = () => (new Date()).getTime();

const getStatusChangeMessageText = (prevStatus, newStatus) => {
  if (prevStatus.type !== newStatus.type) {
    if (newStatus.type === PLAYING) {
      return `started playing ${newStatus.game}`
    }

    if (prevStatus.type === PLAYING) {
      return `finished playing ${prevStatus.game}`
    }

    if (newStatus.type === AWAY) {
      return 'went away'
    }

    if (newStatus.type === ONLINE) {
      return 'went back'
    }
  }

  return null;
}

const getStatusChangeMessage = (user, newStatus) => {
  const text = getStatusChangeMessageText(user.status, newStatus);

  if (text) {
    return {
      sender: user.name,
      timestamp: getTimestamp(),
      isSystem: true,
      text
    }
  }

  return null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTER_MESSAGE:
      return {
        ...state,
        textEntered: action.payload
      }
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            sender: action.payload.user || state.user,
            text: action.payload.text,
            timestamp: getTimestamp()
          }
        ],
        textEntered: ''
      }
    case JOIN:
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload,
            status: {type: ONLINE}
          }
        ],
        messages: [
          ...state.messages,
          {
            sender: action.payload,
            text: "entered the chat",
            timestamp: getTimestamp(),
            isSystem: true
          }
        ]
      }
    case CHANGE_STATUS:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.name === action.payload.name) {
            return {
              ...user,
              status: action.payload.status
            }
          }
          return user;
        }),
        messages: [
          ...state.messages,
          getStatusChangeMessage(
            state.users.find((user) => user.name === action.payload.name),
            action.payload.status
          )
        ].filter((message) => message !== null)
      }
    default:
      return state
  }
}
