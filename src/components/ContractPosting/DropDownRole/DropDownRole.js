
import React from 'react';
import 'tachyons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const DropDownRole = ({rolename, onPropertyChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	return (

			<Dropdown.Item value={rolename} onClick={onPropertyChange("applicantrole")}>{rolename}</Dropdown.Item>
	);

}

export default DropDownRole;










