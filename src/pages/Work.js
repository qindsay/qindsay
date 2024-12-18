import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import NavBar from '../components/NavBar';
import CardList from '../components/CardList';
import "../styles.css";

const Work = () => {
    
    return (
        <>
        <NavBar />
        <div className="content">
            <CardList />
        </div>
        </>
    )
}
export default Work;

// <Container className="content">
// <Row>
//     <Col sm={6}>
//         <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//                 <Card.Title>Project 1</Card.Title>
//                 <Card.Text>A brief description of Project 1.</Card.Text>
//                 <Button variant="primary">View Details</Button>
//             </Card.Body>
//         </Card>
//     </Col>
//     <Col sm={6}>
//         <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//                 <Card.Body>
//                     <Card.Title>Project 2</Card.Title>
//                     <Card.Text>A brief description of Project 2.</Card.Text>
//                     <Button variant="primary">View Details</Button>
//                 </Card.Body>
//         </Card>
//     </Col>
// </Row>
// <Row>
//     <Col sm={6}>
//         <Card>
//             <Card.Img variant="top" src="https://via.placeholder.com/150" />
//             <Card.Body>
//                 <Card.Title>Project 3</Card.Title>
//                 <Card.Text>A brief description of Project 3.</Card.Text>
//                 <Button variant="primary">View Details</Button>
//             </Card.Body>
//         </Card>
//     </Col>
// </Row>
// </Container>