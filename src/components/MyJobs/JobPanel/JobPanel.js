import React from 'react';
import './JobPanel.css';

const JobPanel = ({jobname, employername, threatrank, rolename, jobid, employerid, onJobChange, onProfileChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	return (
		<div className="job-panel">
			<div className="inner-job-panel"> 
				<div className="job-panel-left">
					<h1> {threatrank} </h1>
				</div>
				<div className="job-panel-right">
					<h2 className="job-panel-title" 
					onClick={() => onJobChange(jobid)}> {jobname}  </h2>
					<h4> Role: {rolename} </h4>
					<h4 onClick={() => onProfileChange(employerid)}> Employer: {employername} </h4>
				</div>
				
			</div>


		</div>
	);

}

export default JobPanel;










