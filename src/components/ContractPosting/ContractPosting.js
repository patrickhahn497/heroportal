import React from 'react';
import { FaCheck } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import RoleRequirements from './RoleRequirements/RoleRequirements';
import DropDownRole from './DropDownRole/DropDownRole';
import './ContractPosting.css';


const rankToColor = {
	'S': 'skyblue',
	'A': 'gold',
	'B': 'silver',
	'C': 'bronze',
	'D': 'green',
	'E': 'orange',
	'F': 'red'

}


class ContractPosting extends React.Component {
	//this will be the small widget version that shows up, not the fullpage
	//there will be a larger scrollable component that will be able to contain these posts

	constructor(props) {
		super(props);
		this.state = {
			userid: this.props.user.id,
			jobid: this.props.jobid,
			email: this.props.user.email,
			employername: this.props.user.name,
			employerlink: '',
			jobtitle: 'Defend against Dr. Sinister',
			job: {
				title: '',
				description: '',
				threatrank: '',
				reward: 0,
				employerid: -1
			},
			jobroles: {'required': [], 'preferred': [], 'banned': []},
			applicantrole: "None",
			appsubmitted: false
		}
	}


	componentDidMount(){
		console.log("the id loaded is", this.state.id);

		fetch('http://localhost:3000/jobs/' + this.props.jobid)
			.then(response => response.json())
			.then(job => {
				console.log("job: ", job);
				this.setState({job: job})
			})

		fetch('http://localhost:3000/jobroles/' + this.props.jobid)
			.then(response => response.json())
			.then(jobroles => {
				console.log("job roles: ", jobroles);
				let tempjobroles = {'required': [], 'preferred': [], 'banned': []};
				for (let jobrole of jobroles){
					if (tempjobroles[jobrole['preference']]){
						tempjobroles[jobrole['preference']].push(jobrole);
					}
				}
				console.log("testing temp roles", tempjobroles);
				this.setState({jobroles: tempjobroles})
			})
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


	buttonColor = (attribute) => {
		if (this.state[attribute]){
			return 'green';
		}
		return 'grey';
	}

	onAppSubmit = () => {
		console.log("Application Submitting!");
		fetch('http://localhost:3000/jobapplications', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				applicantid: this.state.userid,
				jobid: this.state.jobid,
				rolename: this.state.applicantrole
			})
		})
		.then(response => response.json())
		.then(jobapp => {
			console.log("job app is ", jobapp)
			if (jobapp){
				this.setState({appsubmitted: true});
			}
		})

	}

	render() {
		const {onRouteChange} = this.props;
		const {title, description, threatrank, reward} = this.state.job;
		return (
			<div className="contract-posting">
				<div className="title-panel">
					<h1> {title} </h1>
					<h3> Employer: {this.state.employername} </h3>
				</div>
				<div className="description-panel">
					<h2> Description </h2>
					<p>
						{description}
					{
					// 	The other day I challenged Dr. Sinister on social media. I didn't expect him to actually respond.
					// Yesterday he announced that he would crash the fundraiser I'm holding tonight. I know this is late notice
					// but I need somebody who can protect my event against this villain.
				}
				{
					// <br/>
					// <br/>
					// The ideal candidate will be have the following qualities.
					// <ul>
					// 	<li>Well-mannered enough to fare well in a formal setting</li>
					// 	<li>Able to keep property destruction to a minimum</li>
					// </ul>
					// <br/>
					// Preferred Abilities
					// <ul>
					// 	<li>Defensive abilities to protect event participants</li>
					// 	<li>Analytical abilities to root out any androids hiding out amongst party-goers.
					// 	Dr. Sinister is known for using androids to infiltrate key targets.</li>
					// </ul>
				}


					</p>
				</div>
				<div>
					<h2> Rank: {threatrank} </h2>
				</div>
				<div>
					<RoleRequirements jobroles={this.state.jobroles}/>
					{
					// <h2> Role Requirements </h2>
					// <h3> Roles Needed </h3>
					// <ul>
					// 	<li> Defender </li>
					// 	<li> Perception </li>
					// 	<li> Technologist </li>
					// 	<li> Combat </li>
					// </ul>
					// <h3> Nice to haves </h3>
					// <ul>
					// 	<li> Stealth </li>
					// 	<li> Healer </li>
					// 	<li> Support </li>
					// </ul>
					// <h3> Role Bans </h3>
					// <ul>
					// 	<li> Demolitionist </li>
					// </ul>
					}

				</div>

				<h2> Reward: {reward} credits </h2>
				{
					// <div className="center">
					// 	<label className="db fw6 lh-copy f6">Contract Title  &nbsp;  </label>
					// 	<div className="mt3 formline">
					//         <input 
					//         	className="pa2 input-reset ba bg-white hover-bg-black hover-black" 
					//         	type="text" 
					//         	name="jobtitle"  
					//         	id="jobtitle"
					//         	placeholder="Job Title"
					//         	onChange={this.onPropertyChange('jobtitle')}
					//         />
					//         <button
					//         	type="button"
					//         	style={{backgroundColor: this.buttonColor('jobtitle')}}
					//         ><FaCheck/></button>
					// 	</div>
					// </div>


					//for the dropdown list we'll do an objects.map for all roles. if a role is in the banned list, it won't show up
				}
				{
					(this.state.job.employerid===this.state.userid)
					? <div> <p> This is your job </p> </div>
					:(
						(this.state.appsubmitted)
						? <h3> Application Submitted </h3>
						:<div className="formline">
							<Dropdown id="dropdown-basic-button">
								<Dropdown.Toggle variant="primary" id="dropdown-basic">
									{this.state.applicantrole}
								</Dropdown.Toggle>
								<Dropdown.Menu className="dropScroll">
								{
															// <DropDownRole rolename="stealth"  onPropertyChange={this.onPropertyChange}/>
									Object.entries(this.state.jobroles['required'].concat(this.state.jobroles['preferred']))
									.map((role) => {
										const rolename = role[1]["rolename"];
										return (<Dropdown.Item value={rolename} onClick={this.onPropertyChange("applicantrole")}>{rolename}</Dropdown.Item>)
									})
								}
								</Dropdown.Menu>

							</Dropdown>
							<Button variant="primary" onClick={this.onAppSubmit}>Submit Application</Button>

						</div>
					)
				}	
			</div>
		);
	}
}

export default ContractPosting;