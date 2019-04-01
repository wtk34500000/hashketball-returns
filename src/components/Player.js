import React from 'react'
import {selectedPlayer} from '../actions/action'
import {connect} from 'react-redux'

const Player = (props) => {
  const onClickHandler = () =>{
    const {selectedPlayer}=props
   selectedPlayer(props.player)
  }

  return (
    <div onClick={onClickHandler}>
      <p>{props.player.name}</p>
    </div>
  )
}

export default connect(null, {selectedPlayer})(Player)
