import { SELECT_PLAYER } from './types'

export const selectPlayer = (player) => {
  console.log(player)
  return {
    type: SELECT_PLAYER,
    payload: {
      player
    }
  }
}
