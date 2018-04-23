import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import './Menu.css'

class Menu extends Component {
	render() {
		return(
			<div>
				<Button className="btn btn-primary btn-circle btn-xl" >Add Payee</Button>
				<Button className="btn btn-primary btn-circle btn-xl" >Add Payee</Button>
				<Button className="btn btn-primary btn-circle btn-xl" >Add Payee</Button>
				<Button className="btn btn-primary btn-circle btn-xl" >Add Payee</Button>	
			</div>
		)
	}
}
export default Menu