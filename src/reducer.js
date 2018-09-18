import gamesData from './gamesData'
import { SELECT_PLAYER } from './actions/types'

const initState = {
  teams: gamesData.teams,
  selectedPlayer: null
}

const reducer = (state = initState, action) => {
  switch (action.type) {

    case SELECT_PLAYER:
      return {
        ...state,
        selectedPlayer: action.payload.player
      }

    default:
      return state
  }
}

export default reducer
