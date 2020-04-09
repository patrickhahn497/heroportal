import React from 'react';
import 'tachyons';
import './Abilities.css'

const Abilities = ({abilityList}) => {
	console.log("passed down correctly", abilityList);
	//the top panel can potentiallly be made into its own component
	return (
		<div>
			<h1> Abilities </h1>
			<div id="abList">
				{
					Object.entries(abilityList).map((abilityObject) => {
						console.log(abilityObject);
						const {abilityName, abilityDescription} = abilityObject[1];
						console.log("this the data we need", abilityName);
						return (
								<div>
									<h2> {abilityName} </h2>
									<p> {abilityDescription} </p>
								</div>
							);
					})

				}
				{
				// <h2> Shadow Manipulation </h2>
				// <p> Able to create and manipulate shadows for a variety of purposes. For example, can solidify shadow constructs into weapons, 
				// or pack shadows loosely to act as a smokescreen
				// </p>
				// <h2> Enhanced Strength </h2>
				// <p> Despite not having the proportional muscular mass required for it, is able to lift a maximum of approximately 2 metric tons. </p>
				// <h2> Enhanced Speed </h2>
				// <p> On foot, is able to run a maximum of 90 mph </p>
				// <h2> Enhanced Reflexes </h2>
				// <p> Has a reaction speed roughly 5x that of an average human </p>
			}

			</div>
			
		</div>
	);

}

export default Abilities;
