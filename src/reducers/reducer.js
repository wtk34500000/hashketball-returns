import gamesData from '../gamesData'

const initialState={
    teams: gamesData.teams,
    selectedPlayer: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case "SELECTED_PLAYER":
            return {teams: [...state.teams], selectedPlayer : action.payload }
        default:
         return state
    }
}

export default reducer;