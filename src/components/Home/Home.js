
import React from 'react';
import 'tachyons';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ({}) => {

	return (
		<div className="home">
			<div className="hometitlecontainer">
				<div className="container hometitleblock">
					<h1 className="homeh1"> <strong>HeroPortal </strong> </h1>
					<hr/>
					<h3> Helping heroes help those in need </h3>
				</div>
			</div>

			<div className="home-bottom-panel">
				<br/>
				<h2> History of Heroes </h2>
				<p> After the superhuman arms race of the mid to late 20th century, there was no need to keep superhumans on the frontlines of combat anymore.
				As a result, many superhuman veterans were relieved from duty and left to try and make it in a country where they had little applicable skills
				beyond manual labor. Seeing no way forward, a decent number of these combat-hardened veterans turned to crime. A good number of superhumans rose to combat
				these supercriminals, but due to current laws, fighting crime meant that they too were criminals. Even still, many valiant heroes fought for the good of all,
				actions which eventually lead to the heavily popular superhuman civil rights movement. After decades of controversy, the government decided to deputize it's 
				superhumans so that they could continue their good deeds while still being held accountable for their actions. 
				</p>
				<br/>


				<div className="whyhero">
					<h2> Why HeroPortal? </h2>
					<p>Efficiency is key.

					Oftentimes, a crisis will not just be stumbled upon on a random patrol of the city. By allowing incidents to be reported, they can be dealt with more efficiently.
					HeroPortal outlines requirements for the number of heroes required for each request, and which types are needed. By doing this, jobs only take in what heroes are
					necessary, freeing up other heroes for other jobs.
					</p>
				</div>
			</div>
		</div>
	);

}

export default Home;










