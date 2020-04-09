
import React from 'react';
import 'tachyons';
import '../CharacterSetup.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const StatFillin = ({stat, value, onPropertyChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 

	return (
		<div className="mt3 center formline ">
			<label className="db fw6 lh-copy f6">{stat}  &nbsp;  </label>
			<Dropdown>
			  <Dropdown.Toggle variant="success" id="dropdown-basic">
			    {value}
			  </Dropdown.Toggle>
			  <Dropdown.Menu className="dropScroll">
			    <Dropdown.Item value="1" onClick={onPropertyChange(stat)}>1</Dropdown.Item>
			    <Dropdown.Item value="2" onClick={onPropertyChange(stat)}>2</Dropdown.Item>
			    <Dropdown.Item value="3" onClick={onPropertyChange(stat)}>3</Dropdown.Item>
			    <Dropdown.Item value="4" onClick={onPropertyChange(stat)}>4</Dropdown.Item>
			    <Dropdown.Item value="5" onClick={onPropertyChange(stat)}>5</Dropdown.Item>
			    <Dropdown.Item value="6" onClick={onPropertyChange(stat)}>6</Dropdown.Item>
			    <Dropdown.Item value="7" onClick={onPropertyChange(stat)}>7</Dropdown.Item>
			    <Dropdown.Item value="8" onClick={onPropertyChange(stat)}>8</Dropdown.Item>
			    <Dropdown.Item value="9" onClick={onPropertyChange(stat)}>9</Dropdown.Item>
			    <Dropdown.Item value="10" onClick={onPropertyChange(stat)}>10</Dropdown.Item>
			    <Dropdown.Item value="11" onClick={onPropertyChange(stat)}>11</Dropdown.Item>
			    <Dropdown.Item value="12" onClick={onPropertyChange(stat)}>12</Dropdown.Item>
			    <Dropdown.Item value="13" onClick={onPropertyChange(stat)}>13</Dropdown.Item>
			    <Dropdown.Item value="14" onClick={onPropertyChange(stat)}>14</Dropdown.Item>
			    <Dropdown.Item value="15" onClick={onPropertyChange(stat)}>15</Dropdown.Item>
			    <Dropdown.Item value="16" onClick={onPropertyChange(stat)}>16</Dropdown.Item>
			    <Dropdown.Item value="17" onClick={onPropertyChange(stat)}>17</Dropdown.Item>
			    <Dropdown.Item value="18" onClick={onPropertyChange(stat)}>18</Dropdown.Item>
			    <Dropdown.Item value="19" onClick={onPropertyChange(stat)}>19</Dropdown.Item>
			    <Dropdown.Item value="20" onClick={onPropertyChange(stat)}>20</Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
		</div>
	);

}

export default StatFillin;










