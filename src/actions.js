import {
  ENTER_MESSAGE,
  SEND_MESSAGE,
  JOIN,
  CHANGE_STATUS,
  MENTION
} from './actionTypes'

export const enterMessage = (text) => ({
  type: ENTER_MESSAGE,
  payload: text
})

export const sendMessage = (user, text) => ({
  type: SEND_MESSAGE,
  payload: {user, text}
})

export const join = (name) => ({
  type: JOIN,
  payload: name
})

export const changeStatus = (name, status) => ({
  type: CHANGE_STATUS,
  payload: {name, status}
})

export const mention = (name) => ({
  type: MENTION,
  payload: name
})
