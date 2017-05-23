import {ENTER_MESSAGE, SEND_MESSAGE} from '../actionTypes'

export const enterMessage = (text) => ({
  type: ENTER_MESSAGE,
  payload: text
})

export const sendMessage = () => ({
  type: SEND_MESSAGE
})
