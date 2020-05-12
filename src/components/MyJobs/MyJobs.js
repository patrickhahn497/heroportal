import React from 'react';
import JobPanel from './JobPanel/JobPanel';
import './MyJobs.css';



class MyJobs extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			userjoblen : 0,
			userjobs : [],
			activetab: 'userjobs',
			employerjobs: []
		}
	}

	isActive = (tabname) => {
		if (this.state.activetab===tabname){
			return 'active-tab';
		}
		return '';
	}

	setProperty = (property, item) => {
		this.setState({[property]: item});
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

		fetch('http://localhost:3000/employerjobs/' + this.props.user.id)
			.then(response => response.json())
			.then(employerjobs => {
				this.setState({employerjobs: employerjobs});
				console.log("the employerjobs jobs are :", employerjobs);
			})
			.catch(error => console.log(error));
	}


	//the top panel can potentiallly be made into its own component
	render() {
		return (
			<div className="outer-myjobs">
				<div className="job-tabs">
					<div className="job-tab"
						id={this.isActive('userjobs')}
						onClick={()=>this.setProperty('activetab', 'userjobs')}
						>
						<h4> Jobs Applied </h4>
					</div>
					<div className="job-tab"
						id={this.isActive('employerjobs')}
						onClick={()=>this.setProperty('activetab', 'employerjobs')}
						>
						<h4> Jobs Posted </h4>
					</div>
					<div className="tab-filler">
					</div>
				</div>

				{
					Object.entries(this.state[this.state.activetab]).map((userjob) => {

						const {name, title, rolename, threatrank, employerid, jobid, employername} = userjob[1];
						console.log("WHY!", employername, employerid);
							// console.log(roleName);
							// console.log(roleValue);
						return (<JobPanel jobname={title} employername={employername} threatrank={threatrank} rolename={rolename}
							employerid={employerid} jobid={jobid}
							onJobChange={this.props.onJobChange} onProfileChange={this.props.onProfileChange}/>);
					})
				}
				{
					// (this.state.activetab==='userjobs')
					// ?(
					// 	<div>
					// 		{
					// 			Object.entries(this.state.userjobs).map((userjob) => {

					// 				const {name, title, rolename, threatrank, employerid, jobid} = userjob[1];
					// 				console.log("WHY!", name, title);
					// 					// console.log(roleName);
					// 					// console.log(roleValue);
					// 				return (<JobPanel jobname={title} employername={name} threatrank={threatrank} rolename={rolename}
					// 					employerid={employerid} jobid={jobid}
					// 					onJobChange={this.props.onJobChange} onProfileChange={this.props.onProfileChange}/>);
					// 			})
					// 		}
					// 	</div>
					// )
					// :<p> employer jobs not implemented yet </p>
				}
				
			</div>
			

		);
	}

}

export default MyJobs;