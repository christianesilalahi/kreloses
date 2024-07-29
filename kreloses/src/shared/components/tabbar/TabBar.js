import { Container, Nav, Navbar } from 'react-bootstrap';
import './TabBar.css'

export const TabBar = () =>  {
  return (
    // <Navbar expand="lg" 
    //     className="navbar"
    //    style={{backgroundSize: "0", backgroundColor: "whitesmoke"}}>
    //   <Container>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link className="nav-link-custom" href="#home">Overview</Nav.Link>
    //         <Nav.Link className="nav-link-custom" href="#link">Upcoming bookings</Nav.Link>
    //         <Nav.Link className="nav-link-custom" href="#home">To do list</Nav.Link>
    //         <Nav.Link className="nav-link-custom" href="#link">Recent Activity</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <div>
        <div className="tab-bar">
        <a href="#overview">Overview</a>
        <a href="#upcoming-bookings">Upcoming Bookings</a>
        <a href="#todo-list">Todo List</a>
        <a href="#recent-activity">Recent Activity</a>
        </div>
    </div>
  );
}

