import React from 'react';
import JobPanel from './JobPanel/JobPanel';
import JobAppPanel from './JobAppPanel/JobAppPanel';
import './MyJobs.css';


const mapStatusToColor = {
	"accepted": "green",
	"rejected": "red"
}


class MyJobs extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			userjoblen : 0,
			userjobs : [],
			activetab: 'userjobs',
			employerjobs: [],
			userapps: [],
			recommendedjobs: []
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
		//if you want to implement pagination, you need to turn tab into it's own component
			//so that it makes a separate get request with each page
			//so we need to feed each tab a key=page
			//when you switch tabs, page should reset to page 1
			//i foresee an issue where switching between uer jobs and employer jobs won't remount
			//because they're the same component, but just use different arrays
			//need a unique key or component for those


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

		fetch('http://localhost:3000/userjobapplications/' + this.props.user.id)
			.then(response => response.json())
			.then(userjobapplications => {
				this.setState({userapps: userjobapplications});
				console.log("the user apps jobs are :", userjobapplications);
			})
			.catch(error => console.log(error));

		fetch('http://localhost:3000/recommendedjobs/' + this.props.user.id)
			.then(response => response.json())
			.then(recommendedjobs => {
				this.setState({recommendedjobs: recommendedjobs});
				console.log("the recommended jobs are :", recommendedjobs);
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
						<h4> My Jobs </h4>
					</div>
					<div className="job-tab"
						id={this.isActive('employerjobs')}
						onClick={()=>this.setProperty('activetab', 'employerjobs')}
						>
						<h4> Jobs Posted </h4>
					</div>
					<div className="job-tab"
						id={this.isActive('userapps')}
						onClick={()=>this.setProperty('activetab', 'userapps')}
						>
						<h4> Jobs Applied </h4>
					</div>
					<div className="job-tab"
						id={this.isActive('recommendedjobs')}
						onClick={()=>this.setProperty('activetab', 'recommendedjobs')}
						>
						<h4> Recommended Jobs </h4>
					</div>
					<div className="tab-filler">
					</div>
				</div>
				{
					(this.state.activetab==="userapps")
					?(
						Object.entries(this.state.userapps).map((userapps) => {

							const {title, rolename, employerid, jobid, status, employername, threatrank} = userapps[1];
								// console.log(roleName);
								// console.log(roleValue);
							return (<JobAppPanel jobname={title} employername={employername} threatrank={threatrank} rolename={rolename}
								employerid={employerid} jobid={jobid} status={status}
								onJobChange={this.props.onJobChange} onProfileChange={this.props.onProfileChange}/>);
						})
					)
					:(
						Object.entries(this.state[this.state.activetab]).map((userjob) => {

							const {name, title, rolename, threatrank, employerid, jobid, employername} = userjob[1];
							console.log("WHY!", employername, employerid);
								// console.log(roleName);
								// console.log(roleValue);
							return (<JobPanel jobname={title} employername={employername} threatrank={threatrank} rolename={rolename}
								employerid={employerid} jobid={jobid}
								onJobChange={this.props.onJobChange} onProfileChange={this.props.onProfileChange}/>);
						})
					)
					
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