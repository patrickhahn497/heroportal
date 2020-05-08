import React from 'react';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/table';

import 'bootstrap/dist/css/bootstrap.min.css';

const statRank = {
	20: "S",
	19: "A+",
	18: "A",
	17: "A-",
	16: "B+",
	15: "B",
	14: "B-",
	13: "C+",
	12: "C",
	11: "C-",
	10: "D+",
	9: "D",
	8: "D-",
	7: "E+",
	6: "E",
	5: "E-",
	4: "F+",
	3: "F",
	2: "F-",
	1: "F--"
}



const Stats = ({stats, grades}) => {
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
						<td> {stats.strength}</td>
						<td> {statRank[stats.strength]}</td>
					</tr>
					<tr>
						<td>Dexterity</td>
						<td> {stats.dexterity}</td>
						<td> {statRank[stats.dexterity]}</td>
					</tr>
					<tr>
						<td>Constitution</td>
						<td> {stats.constitution}</td>
						<td> {statRank[stats.constitution]}</td>
					</tr>
					<tr>
						<td>Intelligence</td>
						<td> {stats.intelligence}</td>
						<td> {statRank[stats.intelligence]}</td>
					</tr>
					<tr>
						<td>Wisdom</td>
						<td> {stats.wisdom}</td>
						<td> {statRank[stats.wisdom]}</td>
					</tr>
					<tr>
						<td>Charisma</td>
						<td> {stats.charisma}</td>
						<td> {statRank[stats.charisma]}</td>
					</tr>
					
				</tbody>
			</Table>
		</div>
	);

}

export default Stats;
