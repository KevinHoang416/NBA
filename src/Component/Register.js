import React from 'react';
import './Style.css'

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                    Email: '' ,
                    age:'',
                    password:'',
                    passwordrepeat:'.',
    };
}
  
    myChangeHandlerEmail = (event) => {
      this.setState({Email: event.target.value});
    }
  
    myChangeHandlerAge = (event) => {
      this.setState({age:event.target.value});  
    }
    
    myChangeHandlerPassword = (event) => {
        this.setState({password:event.target.value});  
      }

      myChangeHandlerPasswordRe = (event) => {
        this.setState({passwordrepeat:event.target.value});  
      }

    eulaCheck = (event) => {
      if (event.target.checked === true){
      this.setState({checked:'true'});
      return true;
      } else{
        this.setState({checked:'false'});
      }
    }
  
    submitted = (props, eulaCheck) => {
     if (this.state.checked === 'true'){
      if (this.state.age>=18){
          if(this.state.password === this.state.passwordrepeat){
              if(this.state.Email.includes('@')){  
                    alert('Registration Successful')
                    window.location.replace('/login')
              }else {
                  alert ('Registration requires a valid Email address')
              }          
          } else {
              alert ('Passwords Must Match.');
          }
      } else{
        alert ('The Fantasy League requires users be at least 18 years of age.');
       }
      }else{
        alert("Please accept the Rush Hour Sports user agreement before submitting.");
      }
      }
    
  
  render() {
      return (
        <form>
        <h1 className="pageheader">New User Registration</h1>
        <p>Enter your email:</p>
        <input id ='email'
          type='text'
          onChange={this.myChangeHandlerEmail}
        />
        
        <p>Enter your Age:</p>
        <input id ='age'
          type='text'
          onChange={this.myChangeHandlerAge}
         />

        <p>Enter your password:</p>
        <input id ='pw'
          type='password'
          onChange={this.myChangeHandlerPassword}
         />

        <p>Please re enter your password:</p>
        <input id ='pwrepeat'
          type='password'
          onChange={this.myChangeHandlerPasswordRe}
         />

        <br></br><br></br>
        <input id = 'EULA' type="checkbox" onChange={this.eulaCheck}/> <label>I acknowledge I am of at least 18 years of age and can handle the <b>R U S H</b>.</label>
        <br></br><br></br>
  
        <button id = 'submission'
        type="button" 
        onClick={this.submitted}>
        Submit
        </button>
  
        
        </form>
  
        
        
      );
    }
  }
  
  export default Register