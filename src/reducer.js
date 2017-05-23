import {
  ENTER_MESSAGE,
  SEND_MESSAGE,
  JOIN,
  CHANGE_STATUS
} from './actionTypes'
import {ONLINE} from './chatStatuses'

const INITIAL_STATE = {
  user: "GeorgeMartin",
  messages: [],
  textEntered: "",
  users: [
    {
      name: "GeorgeMartin",
      status: ONLINE,
    }
  ]
}

const getTimestamp = () => (new Date()).getTime();

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
            status: ONLINE
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
        })
      }
    default:
      return state
  }
}
