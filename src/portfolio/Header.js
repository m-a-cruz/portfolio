import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router , Routes, Route, Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Header = () => {
  return (
    <>
    <Navbar style={{backgroundColor: '#98c1d9'}} data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/home" style={{fontFamily: 'black ops one', fontSize: '40px', color: 'black'}}>
          <img src="/img/logo.png" width="50" height="50" className="d-inline-block align-top" alt="logo"/>{' '}
            MNDLCRZ
        </Navbar.Brand>
        <Nav variant="tabs" defaultActiveKey="/home" style={{fontFamily: 'archivo narrow', fontSize: '20px'}}>
          <Nav.Item>
            <Nav.Link as={Link} to={'/portfolio/home'} eventKey={"Home"}><HomeIcon />Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/portfolio/about" eventKey={"About"}><Person2Icon />About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={'/portfolio/education'} eventKey="Education"><LibraryBooksIcon />Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to={'/portfolio/contact'} eventKey="Contact"><ContactPageIcon />Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginLeft: '30px'}}>
            <Nav.Link eventKey="disabled" disabled><strong>Ma. Ana De La Cruz</strong> </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;
