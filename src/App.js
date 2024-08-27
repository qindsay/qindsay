import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';

function App() {
  return (

    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;


// import React from 'react';
// import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Brand href="#home">My Personal Website</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#projects">Projects</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <header className="header-section">
//         <Container className="text-center">
//           <h1>Welcome to My Personal Website</h1>
//           <p>Hi, I'm [Your Name], and this is a brief introduction to who I am and what I do.</p>
//           <Button variant="primary" href="#about">Learn more</Button>
//         </Container>
//       </header>

//       <Container id="about" className="my-5">
//         <Row>
//           <Col md={6}>
//             <h2>About Me</h2>
//             <p>
//               I am a passionate [Your Profession] with experience in [Your Skills]. I love to work on interesting projects and solve complex problems.
//             </p>
//           </Col>
//           <Col md={6}>
//             <img src="https://via.placeholder.com/500" alt="Profile" className="img-fluid" />
//           </Col>
//         </Row>
//       </Container>

//       <Container id="projects" className="my-5">
//         <h2>Projects</h2>
//         <Row>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="https://via.placeholder.com/150" />
//               <Card.Body>
//                 <Card.Title>Project 1</Card.Title>
//                 <Card.Text>A brief description of Project 1.</Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="https://via.placeholder.com/150" />
//               <Card.Body>
//                 <Card.Title>Project 2</Card.Title>
//                 <Card.Text>A brief description of Project 2.</Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card>
//               <Card.Img variant="top" src="https://via.placeholder.com/150" />
//               <Card.Body>
//                 <Card.Title>Project 3</Card.Title>
//                 <Card.Text>A brief description of Project 3.</Card.Text>
//                 <Button variant="primary">View Details</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       <Container id="contact" className="my-5">
//         <h2>Contact</h2>
//         <p>If you want to get in touch, please feel free to email me at [Your Email].</p>
//       </Container>

//       <footer className="text-center py-3">
//         <Container>
//           <p>© 2024 [Your Name]. All rights reserved.</p>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default App;