import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import mask from '../assets/images/Mask group.png';

import start from '../assets/images/starthere.png';


const Header = ({ navMargin }) => {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>


        <Navbar.Brand href="#"><img src={mask} alt="Profile"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
           
            <Nav.Link as={Link} to='/projects' style={{color: 'white'}}><b>Web3Makr</b></Nav.Link>

            <Nav.Link as={Link} to='/projects' style={{color: 'white'}}><b>White Paper</b></Nav.Link>
           

      
            <Nav.Link as={Link} to='contact' style={{color: 'white'}}><b>Services</b></Nav.Link>
            
            <Nav.Link as={Link} to='contact' style={{color: 'white'}}> <b>Tool</b> </Nav.Link>
            <Nav.Link as={Link} to='contact' style={{color: 'white'}}> <b>Contact Us</b> </Nav.Link>
          </Nav>
        
        {/* </Form> */}
        </Navbar.Collapse>

        
        
       
      </Container>
    </Navbar>
    </>
  )
}

export default Header;




