import React from 'react'
import ReactDOM from 'react-dom'
import MiniSquare from './miniSquare.jsx'
import ResetButton from './resetButton.jsx'
import LittleLabel from './littleLabel.jsx'
import WinLabel from './winLabel.jsx'

let big = {
  width: '500px',
  height: '500px',
  background: '#2A6ECC',
  position: 'relative',
  margin: 'auto',
  marginTop: '4em',
  top: '5em',
  borderRadius: '20px',
}

class BigSquare extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			board: ['','','',
    				'','','',
    				'','',''],
			winner: null,
			turn: "X"
		}
	}

	updateTile(index) {
		const newBoard = this.state.board

		if(this.state.board[index] === ''){
			newBoard[index] = this.state.turn
			this.setState({
				board: newBoard,
				turn: this.state.turn == "X" ? "O" : "X",
			})
			this.validateMove()

		}
	}

	validateMove() {
    let topRow = this.state.board[0] + this.state.board[1] + this.state.board[2]
    if(topRow.match(/OOO/) || topRow.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let middleRow = this.state.board[3] + this.state.board[4] + this.state.board[5]
    if(middleRow.match(/OOO/) || middleRow.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let bottomRow = this.state.board[6] + this.state.board[7] + this.state.board[8]
    if(bottomRow.match(/OOO/) || bottomRow.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let diagonalRight = this.state.board[0] + this.state.board[4] + this.state.board[8]
    if(diagonalRight.match(/OOO/) || diagonalRight.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let diagonalLeft = this.state.board[2] + this.state.board[4] + this.state.board[6]
    if(diagonalLeft.match(/OOO/) || diagonalLeft.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let firstCol = this.state.board[0] + this.state.board[3] + this.state.board[6]
    if(firstCol.match(/OOO/) || firstCol.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let secondCol = this.state.board[1] + this.state.board[4] + this.state.board[7]
    if(secondCol.match(/OOO/) || secondCol.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
    let thirdCol = this.state.board[2] + this.state.board[5] + this.state.board[8]
    if(thirdCol.match(/OOO/) || thirdCol.match(/XXX/)) {
    	this.setState({
    		winner: true
    	})
    	return
    }
	}

	resetBoard(){
		this.setState({
			board: ['','','',
							'','','',
							'','',''],
			winner: null,
			turn: "X"
		})
	}

	render() {
		return(
    		<div style={big} >
    		{this.state.board.map((value,i) => {
    			return(
    				<MiniSquare
    					key={i}
    					element={this.state.board[i]}
    					onClick={this.updateTile.bind(this,i)} 
    				/>
    			)
    			})
    		}
    		<LittleLabel />
    		<ResetButton reset={this.resetBoard.bind(this)}/>
    		<WinLabel show={this.state.winner}/>
    	</div>
		)
	}
}

ReactDOM.render(<BigSquare/>, document.getElementById('app'))