import React from 'react';
import { FaCheck } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


class ContractPosting extends React.Component {
	//this will be the small widget version that shows up, not the fullpage
	//there will be a larger scrollable component that will be able to contain these posts

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			email: '',
			employername: '',
			employerlink: '',
			jobtitle: ''

			
		}
	}

	buttonColor = (attribute) => {
		if (attribute==="email"){
			if (this.state[attribute]){
				this.validateEmail(this.state.email)
			}
		}
		else if (this.state[attribute]){
			return 'green';
		}
		return 'grey';

	}


	onPropertyChange = (property) => (event) => {
		console.log(event.target);
		
		this.setState({[property]:event.target.getAttribute('value') });
		console.log(this.state[property]);
	}

	setProperty = (property, item) => {
		console.log("wow", item);
		this.setState({[property]: item });
		console.log(this.state[property]);
		console.log("state", this.state)

	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div className="">

				<h1> {this.state.jobtitle} </h1>
				{//this is positioned on the left side
				}


			</div>
		);
	}
}

export default ContractPosting;