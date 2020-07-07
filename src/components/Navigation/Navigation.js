
import React from 'react';
import 'tachyons';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = ({isSignedIn, onRouteChange, onProfileChange}) => {
	//the top panel can potentiallly be made into its own component
	//if 
	console.log(isSignedIn);
	return (
		<div>
			<Navbar bg="dark" variant="dark">
			    <Navbar.Brand href="#home" onClick={() => onRouteChange('home')}>HeroPortal</Navbar.Brand>
			    <Nav className="mr-auto">
			      <Nav.Link onClick={() => onRouteChange('home')}>Home</Nav.Link>
			      {
			      	!isSignedIn
			      	?<div> </div>
			      	:<div className="flex">
				    	<Nav.Link onClick={() => onProfileChange()}>Profile</Nav.Link>
			      		<Nav.Link  onClick={() => onRouteChange('contractsetup')}>Post Job</Nav.Link>
			      		<Nav.Link  onClick={() => onRouteChange('myjobs')}>My Jobs</Nav.Link>
			      	</div>
			      }
			      
			    </Nav>
			    <Form inline>
				{!isSignedIn
					?
					<div className="flex">
				      <Nav.Link onClick={() => onRouteChange('signin')}>Sign In</Nav.Link>
				      <Nav.Link onClick={() => onRouteChange('register')}>Register</Nav.Link>
			      	</div>
			      :<Nav.Link onClick={() => onRouteChange('signout')}>Sign Out</Nav.Link>
			    }
			    {
			      // <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			      // <Button variant="outline-info">Search</Button>
			  	}
			    </Form>
			</Navbar>
		</div>
	);

}

export default Navigation;










