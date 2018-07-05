import React, { Component } from 'react'

class LabelComponent extends Component {

	render () {
		return (
			<label className={this.props.className} >{this.props.value}</label >
		)
	}
}
export default LabelComponent
