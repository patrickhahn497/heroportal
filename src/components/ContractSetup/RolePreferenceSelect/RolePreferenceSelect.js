
import React from 'react';
import 'tachyons';
import Table from 'react-bootstrap/table';
import RolePreferenceRow from './RolePreferenceRow/RolePreferenceRow';

import './RolePreferenceSelect.css';

const RolePreferenceSelect = ({roleStatus, onPropertyChange, onPreferenceChange, onSubPropertyChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	return (
		<div className="role-pref-table">
			<Table striped bordered hover>
				<thead>
					<tr>
						<td> Role </td>
						<td> Required </td>
						<td> Preferred </td>
						<td> Banned </td>
						<td> Slots </td>
					</tr>
				</thead>
				<tbody>
				{
					Object.entries(roleStatus).map(([roleName, roleValue]) => {
						// console.log(roleName);
						// console.log(roleValue);
						return (<RolePreferenceRow rolename={roleName} 
							description={roleValue['description']} 
							preference={roleValue['preference']}
							slots={roleValue['slots']}
							onPreferenceChange={onPreferenceChange}
							onSubPropertyChange={onSubPropertyChange}/>);
					})
					
				}
				</tbody>
			</Table>

		</div>
	);

}

export default RolePreferenceSelect;










