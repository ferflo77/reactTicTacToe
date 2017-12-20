import React, { Component } from 'react'

const style = {
	position: 'relative',
	textAlign: 'center',
	fontFamily: 'Anton',
	fontSize: '2em'
}

export default class WinLabel extends Component {
	
	render(){
		let winBanner = ''
		if(this.props.show){
			winBanner = "WINNER!"
		}
		return(
			
			<h1 style={style}> {winBanner}</h1>
		)
	}
}