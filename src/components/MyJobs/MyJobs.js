import React from 'react';
import JobPanel from './JobPanel/JobPanel';


class MyJobs extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			userjoblen : 0,
			userjobs : []
		}
	}

	componentDidMount(){
		fetch('http://localhost:3000/userjobs/' + this.props.user.id)
			.then(response => response.json())
			.then(userjobs => {
				this.setState({userjoblen : userjobs.length});
				this.setState({userjobs: userjobs});
				console.log("the user jobs are :", userjobs);
			})
			.catch(error => console.log(error));


	}


	//the top panel can potentiallly be made into its own component
	render() {
		return (
			<div className="outer-myjobs">

			{
				Object.entries(this.state.userjobs).map((userjob) => {

					const {name, title, rolename, threatrank, employerid, jobid} = userjob[1];
					console.log("WHY!", name, title);
						// console.log(roleName);
						// console.log(roleValue);
					return (<JobPanel jobname={title} employername={name} threatrank={threatrank} rolename={rolename}
						employerid={employerid} jobid={jobid}
						onJobChange={this.props.onJobChange} onProfileChange={this.props.onProfileChange}/>);
				})
			}
				
			</div>
			

		);
	}

}

export default MyJobs;