import React from 'react';
import JobAppLine from './JobAppLine/JobAppLine';


class JobApplicants extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			jobapps : {}
		}
	}

	componentDidMount(){
		fetch('http://localhost:3000/jobapplications/' + this.props.jobid)
			.then(response => response.json())
			.then(jobapps => {
				let tempjobapps = {};
				for (let i = 0; i < jobapps.length; i++){
					if (jobapps[i]['status']=='pending'){
						tempjobapps[jobapps[i]['jobappid']] = jobapps[i];
					}
				}
				this.setState({jobapps : tempjobapps});
				console.log("the job apps are :", tempjobapps);
			})
			.then(console.log(this.state.jobapps, "wjksdbnf"))
			.catch(error => console.log(error))
	}

	onStatusChange = (jobappid, newstatus) => {
		//jobapp should have unique jobapp id's

		let temp = this.state.jobapps[jobappid];
		temp['status']=newstatus;
		this.setState({jobapps: {...this.state.jobapps, [jobappid]: temp}});

		fetch('http://localhost:3000/jobapplications', {
			method: 'patch',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				applicantid: this.state.userid,
				jobid: this.state.jobid,
				rolename: this.state.applicantrole,
				status: newstatus
			})
		})
		.then(response => response.json())
		.then(jobapp => console.log(jobapp))
		.catch(error => console.log(error));

	}


	//the top panel can potentiallly be made into its own component
	render() {
		return (
			<div className="outer-myjobs">
			 {
				Object.entries(this.state.jobapps).map((jobapps) => {
					console.log("please work", jobapps);
					const {name, rolename, status, jobappid} = jobapps[1];
						// console.log(roleName);
						// console.log(roleValue);
						return <JobAppLine name={name} rolename={rolename} status={status} jobappid={jobappid}
							onStatusChange={this.onStatusChange}/>
					//return (<div> <p> {name} : {rolename} - {status}</p></div>);
				})
			 }
				
			</div>
			

		);
	}

}

export default JobApplicants;