import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

export const NavBar = ({toggleSidebar}) =>  {
  return (
    <Navbar expand="lg" 
        className="navbar"
       style={{backgroundSize: "0", backgroundColor: "#4169e1"}}>
      <Container>
        <Button onClick={toggleSidebar}>☰</Button>
        <Navbar.Brand href="#home" style={{color: "white"}}>KRELOSES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-custom" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-link-custom" href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <h1>Testttt</h1>
      </Container>
    </Navbar>
  );
}

