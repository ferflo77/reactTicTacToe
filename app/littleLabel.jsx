import React from 'react'

let label = {
	fontFamily: 'Anton',
	fontSize: '2.6em',
	textAlign: 'center',
	position: 'absolute',
	top: '-2.5em',
	left: '1.5em'
}

export default class LittleLabel extends React.Component {
	render(){
		return(
			<div>
				<h1 style={label}>TIC TAC TOE... LET'S GO!</h1>
			</div>
		)
	}
}