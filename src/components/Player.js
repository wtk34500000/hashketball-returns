import React from 'react'
import { selectPlayer } from '../actions'
import { connect } from 'react-redux'

const Player = (props) => {
  const { player } = props
  return (
    <div onClick={() => props.selectPlayer(props.player) }>
      <p>{props.player.name}</p>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectPlayer: (player) => dispatch(selectPlayer(player))
//   }
// }

export default connect(null, { selectPlayer })(Player)
