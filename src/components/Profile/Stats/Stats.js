import React from 'react';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/table';

import 'bootstrap/dist/css/bootstrap.min.css';
const Stats = ({stats}) => {
	//the top panel can potentiallly be made into its own component
	console.log("moveon", stats);
	return (
		<div>
			<h1> Attributes </h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<td>Attribute</td>
						<td>Score</td>
						<td>Rank</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Strength</td>
						<td> {stats.str}</td>
						<td>B+</td>
					</tr>
					<tr>
						<td>Dexterity</td>
						<td> {stats.dex}</td>
						<td>A </td>
					</tr>
					<tr>
						<td>Constitution</td>
						<td> {stats.con}</td>
						<td> B-</td>
					</tr>
					<tr>
						<td>Intelligence</td>
						<td> {stats.int}</td>
						<td> B</td>
					</tr>
					<tr>
						<td>Wisdom</td>
						<td> {stats.wis}</td>
						<td> B+</td>
					</tr>
					<tr>
						<td>Charisma</td>
						<td> {stats.cha}</td>
						<td> C</td>
					</tr>
					
				</tbody>
			</Table>
		</div>
	);

}

export default Stats;
