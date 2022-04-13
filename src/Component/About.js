import React from 'react';
import './Style.css'
import { Alert, Form, Button } from 'react-bootstrap'

const handleClick = () => {
  alert("Thank you for the feedback")
}

function About() {
  return (
    <div>
      <Alert variant="success">

        <Alert.Heading className='heading'></Alert.Heading>

        <h1>About Us</h1>
        <p> We are students in the CPAN144 Advanced Front End Programming. This project is a showcase to utilize our skills that we have honed throughout the semester.
          We thank you for visiting our site and hope you have enjoyed navigating throughout the website.
        </p>
        <p> We both are NBA fanatics and this page was to highlight our love for the sport!</p>
      </Alert>
      <form>
        <h1>Feedback</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Please give us any feedback that can help us build a fantastic site</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Feedback" />
          </Form.Group>
          <Button onClick={handleClick} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form><br /><br />
      <h3>Follow Us </h3><br/>
      <div class="bottom-container">
            <a class="footer-link" href="https://www.instagram.com/">Instagram</a>
            <a class="footer-link" href="https://twitter.com/">Twitter</a>
            <a class="footer-link" href="https://twitter.com/">Discord</a>
          </div>
    </div>
  )
}

export default About;