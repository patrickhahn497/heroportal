
import React from 'react';
import 'tachyons';
import Table from 'react-bootstrap/table';
import ReactTooltip from "react-tooltip";

const RolePreferenceRow = ({rolename, description, preference, onPreferenceChange, onSubPropertyChange, slots}) => {
	//the top panel can potentiallly be made into its own component
	//if 
	const newname = rolename+"required"

	return (
		<tr>
			<td> <p data-tip={description}> {rolename} <ReactTooltip/> </p> </td>
			<td> <input type="radio" id={rolename + "required"} name={rolename} onChange={() => onPreferenceChange(rolename, "required")}/> </td>
			<td> <input type="radio" id={rolename + "preferred"} name={rolename} onChange={() => onPreferenceChange(rolename, "preferred")}/> </td>
			<td> <input type="radio" id={rolename + "banned"} name={rolename} onChange={() => onPreferenceChange(rolename, "banned")}/></td>
			<td> <input type="text" style={{width: 30}} onChange={onSubPropertyChange(rolename, 'slots', true)} value={slots}/> </td>
		</tr>
	);

}

export default RolePreferenceRow;










