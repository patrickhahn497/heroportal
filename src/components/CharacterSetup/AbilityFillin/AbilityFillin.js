import React from 'react';
import '../CharacterSetup.css';
import Button from 'react-bootstrap/Button';


const AbilityFillin = ({id, onNameChange, onDescriptionChange, onAbilityAdd, onAbilityDelete, abilityName, abilityDescription}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	//rather than have each input manage their own values, their values are passed on from the parent object
	//because when they managed their own, the item at the end would be cut off even if we wanted to delete from the middle
	//so by having this component filled in by the javascript object the layer above, we can better pick and choose what we want

	return (
		<div className="ability-box">
			<div className="ability-namedesc">
				<input 
		        	className="pa2 input-reset ba bg-white hover-bg-black hover-black"
		        	placeholder="Ability Name"
		        	type="text"
		        	onChange={onNameChange(id)}
		        	value={abilityName}
		        />
		        <textarea rows="5" cols="52" name="description" placeholder="Ability Description" 
		        	className="pa2 input-reset ba bg-white hover-bg-black hover-black  ability-description"
		        	onChange={onDescriptionChange(id)}
		        	value={abilityDescription}
		        	>
		        </textarea>
		    </div>
		    <div className="ability-button-cluster">
		    	<Button variant="secondary" className="ability-button" onClick={onAbilityAdd}>+</Button>
		    	<Button variant="secondary" className="ability-button" onClick={onAbilityDelete(id)}>-</Button>
		    </div>

		</div>

	);

}

export default AbilityFillin;










