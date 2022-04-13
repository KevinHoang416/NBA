import Home from "./Component/Home";
import Login from "./Component/Login";
import About from "./Component/About";
import Player from "./Component/Player";
import Register from "./Component/Register";
import Footer from "./Component/Footer";
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div>
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">
    <img
        src="Images\NAVBARLOGO.png"
        width="75"
        height="75"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as= {Link} to= "/">Home</Nav.Link>
      <Nav.Link as= {Link} to="/Player">Teams & Players</Nav.Link>
      <Nav.Link as= {Link} to="/Login">Fantasy League</Nav.Link>
      <Nav.Link as= {Link} to="/About">About Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>

    </div>
    <div>
      <Routes>
 <Route path= '/' element={<Home/>}/>  
 <Route path= '/Login' element={<Login/>}/>  
 <Route path= '/Player' element={<Player/>}/> 
 <Route path= '/About' element={<About/>}/> 
 <Route path= '/Register' element={<Register/>}/> 
 </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}
export default App;
