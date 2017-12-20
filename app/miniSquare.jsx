import React from 'react'

let mini = {
	width: '140px',
	height: '140px',
	background: '#FF614E',
	position: 'relative',
	margin: '0.6em',
	border: '3px solid white',
	borderRadius: '10px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	float: 'left',
}

export default class MiniSquare extends React.Component {

	constructor(props){
		super(props)
	}

	render() {		
		let displayIcon

		if(this.props.element == "X"){
			displayIcon = <i className="fa-5x fa-times fa"></i>
		}
		else if(this.props.element == "O"){
			displayIcon = <i className="fa-5x fa-circle-o fa"></i>
		}
		console.log(displayIcon)

		return(
			<div style={mini} onClick={this.props.onClick}>
				{displayIcon}
			</div>
		)
	}
}