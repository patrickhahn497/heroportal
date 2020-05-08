import React from 'react';
import 'tachyons';
import Table from 'react-bootstrap/table';
import './RoleFillin.css';

const RoleFillin = ({roles, onRoleSelect, roleColor}) => {
	//the top panel can potentiallly be made into its own component
	return (
		<div>
			<h2> Roles </h2>
			<Table striped bordered hover className="tabletop">
				<thead>
					<tr>
					{
						Object.entries(roles).map(([roleName, roleValue]) => {
							// console.log(roleName);
							// console.log(roleValue);
							return (<td onClick={() => onRoleSelect(roleName)}
								style={{backgroundColor: roleColor(roleName)}}
								>{roleName}</td>);
						})
					
					}

					{
						// <td onClick={() => onRoleSelect('stealth')}
						// 	style={{backgroundColor: roleColor('stealth')}}
						// >Stealth</td>
						// <td onClick={() => onRoleSelect('combat')}
						// 	style={{backgroundColor: roleColor('combat')}}
						// >Combat</td>
						// <td onClick={() => onRoleSelect('support')}
						// 	style={{backgroundColor: roleColor('support')}}
						// >Support</td>
					}
					</tr>
				</thead>
			</Table>

			
		</div>
	);

}

export default RoleFillin;
