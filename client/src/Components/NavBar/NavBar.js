import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const Navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" onClick={() => Navigate("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              className="text-light"
              onClick={() => Navigate("/Complaints")}
            >
              Complaints
            </Nav.Link>
            <Nav.Link
              className="text-light"
              onClick={() => Navigate("/ContactUs")}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link className="text-light" onClick={() => Navigate("/About")}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="form-inline my-2 my-lg-0">
          <Button
            className="btnn-register my-2 my-sm-0"
            variant="outline-success"
            onClick={() => Navigate("/RegisterForm")}
          >
            Register
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
