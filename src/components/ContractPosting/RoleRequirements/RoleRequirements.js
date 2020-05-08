import React from 'react';
import RoleReqList from './RoleReqList/RoleReqList'
import 'tachyons';

const RoleRequirements = ({jobroles}) => {
	//the top panel can potentiallly be made into its own component
	return (
		<div>
			<h2> Role Requirements </h2>
			{
				(jobroles['required'].length)
				? <div>
					<h3> Roles Required </h3>
					<RoleReqList preference={'required'} jobroles={jobroles['required']} />
				</div>
				: <div> </div>
			}

			{
				(jobroles['preferred'].length)
				? <div>
					<h3> Roles Preferred </h3>
					<RoleReqList preference={'preferred'} jobroles={jobroles['preferred']} />
				</div>
				: <div> </div>
			}

			{
				(jobroles['banned'].length)
				? <div>
					<h3> Roles Banned </h3>
					<RoleReqList preference={'banned'} jobroles={jobroles['banned']} />
				</div>
				: <div> </div>
			}

			
		</div>
	);

}

export default RoleRequirements;
