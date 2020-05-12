
import React from 'react';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import { FaCheck, FaMinus, FaPlus} from "react-icons/fa";
import {TiDeleteOutline} from "react-icons/ti";
// import {GrAdd} from 'react-icons/gr';
import './JobAppLine.css';


const JobAppLine = ({rolename, name, status, jobappid, onStatusChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	return (

			<div className="job-app-line">
				<p> {name} : {rolename} - {status}</p>
				<button
			        	type="button"
			        	style={{backgroundColor: 'green'}}
			        	onClick={()=>onStatusChange(jobappid, "accepted")}
			      ><FaPlus/>
			    </button>
			    <button
			        	type="button"
			        	style={{backgroundColor: 'red'}}
			        	onClick={()=>onStatusChange(jobappid, "rejected")}
			      ><FaMinus/>
			    </button>
			</div>
	);

}

export default JobAppLine;










