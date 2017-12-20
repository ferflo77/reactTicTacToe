import React from 'react'

let style = {
			position: 'absolute',
			top: '15em',
			left:'40em',
			width: '4.5em',
			height: '2em',
			border: '2px solid black',
			cursor: 'pointer',
			fontFamily: 'Anton',
			paddingLeft: '15px',
			paddingTop: '4px',
}


export default class ResetButton extends React.Component {
	render(){
		return(
			<div style={style}> 
				<div onClick={this.props.reset}> RESTART!</div>
			</div>
		)
	}
}
