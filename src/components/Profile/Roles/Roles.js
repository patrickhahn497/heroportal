import React from 'react';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Tooltip from '@material-ui/core/Tooltip';
import './Roles.css';
import stealthPic from './Stealth.png';
import combatPic from './Combat.png';
import supportPic from './Support.png';

import 'bootstrap/dist/css/bootstrap.min.css';
const Roles = ({roleList}) => {
	//the top panel can potentiallly be made into its own component
	//roles should contain title and description
	const mapRoleToPic = {
		"stealth": stealthPic,
		"combat": combatPic,
		"support": supportPic
	}

	console.log("real roles", roleList);


	return (
		<div>
			<h1> Roles </h1>
			<div className="grid-wrapper">

				{
					(roleList=='Roles not found')
						?<div></div>
						:Object.values(roleList).map((role) => {
							console.log("role: ", role);
							const name = role["name"];
							if (role){
								return (

									<Tooltip title={""+role['description']}>
										<div id={name} className="box zone">
											<img src={mapRoleToPic[name]}/>
											<p> 
												{name ? name[0].toUpperCase()+name.slice(1) : ""}
											</p>
										</div>
									</Tooltip>
								)
							}

						})
					
				}

				
				{
				// <Tooltip title="Specializes in surgical operations that require a person not to be noticed.">

				// 	<div id="stealth" className="box zone">
				// 		<img src={stealthPic}/>
				// 		<p>Stealth</p>
				// 	</div>
				// </Tooltip>
				// <Tooltip title="Specializes in direct combat with hostiles. Examples of qualifying traits are superstrength, destructive energy blasts, or adept martial arts ability.">
				// 	<div id="combat" className="box zone">
				// 		<img src={combatPic}/>
				// 		<p>Combat</p>
						
				// 	</div>
				// </Tooltip>
				// <Tooltip title="Aids a team either by bolstering allies or afflicting negative conditions on an enemy.
				// 	Examples include creating telekinetic barriers which enhance an ally's defense or smoke grenades which may obstruct an enemy's vision.">
				// 	<div id="support" className="box zone">
				// 		<img src={supportPic}/>
				// 		<p>Support</p>
				// 	</div>
				// </Tooltip>
			}
			</div>
		</div>
	);

}

export default Roles;
