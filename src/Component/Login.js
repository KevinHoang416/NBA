import React from 'react';
import './Style.css'
import { Form, Button} from 'react-bootstrap'

function Login(){
  return (
    <div>
    <h2 className = 'pageheader'>Fantasy League Login</h2>
    <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '355px', height: '355px'}} src='images/fantasyleague.png'></img>
    <br/>
<Form className= 'loginform'>
<label>
    <b>Email</b><br/>
    <input type="text" name="email" />
  </label>
  <br/><br/>
  <label>
    <b>Password</b>
    <br/>
    <input type="password" name="password" />
  </label>
  <br/><br/>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <br/><br/>
  <h2>New User Registration</h2>
  <Button variant="primary" type="submit" href='/Register'>Register</Button>
</Form>
    </div>
  )
  }

export default Login;