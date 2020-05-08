import React from 'react';
import 'tachyons';

const RoleReqList = ({preference, jobroles}) => {
	//the top panel can potentiallly be made into its own component
	return (
		<div>
			{
				<ul>
					{
						jobroles.map((role) => {
							return (
								<li>
									{role.rolename}
								</li>
							);
						})
					}
				</ul>
			}
		</div>
	);

}

export default RoleReqList;
