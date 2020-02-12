import React, { Component } from 'react';
import Header from './components/header';
// import Display from './components/display.jsx'
import ContactForm from './components/ContactForm'
import './App.css';
var contacts;


class App extends Component {
  state = { 
    contacts:{
        firstName: "Jacob",
        lastName: "McCaskey",
        email: "mccaskey316@gmail.com",
        phoneNumber: "813.516.0468",
        notes: "Really wants to learn React"
    }
        
 }


 openForm = ()=> {
   this.displayForm()
}

onSubmit= (fields)=>{
  contacts = this.state;
  contacts.firstName= fields.firstName
  contacts.lastName = fields.lastName
  contacts.email = fields.email
  contacts.phoneNumber = fields.phoneNumber
  contacts.notes = fields.notes
  this.setState({
    contacts
  })
  this.hideForm()
  console.log(this.state);
  }

 

displayForm= ()=> {
  let displayForm = document.querySelector('.contact-form');
  displayForm.style.display= "inline";
}
hideForm = ()=> {
  document.querySelector('.contact-form').style.display = "none";
}

  render() { 
    const { contacts } = this.state;
    return ( 
      <React.Fragment>
      < Header openForm= {()=> this.openForm()}/>
      <div className= "container bg-light displayBox sm-2">
                <span className="l-3">
                    {contacts.firstName} {contacts.lastName}
                </span>
                <span> |  { contacts.email }</span>
                <span>  | { contacts.phoneNumber }</span>
                <span className= "overflow-hidden">  | notes: { contacts.notes }</span>
            </div>
          
     
        < ContactForm onSubmit={fields=> this.onSubmit(fields)}/>
      </React.Fragment>
     );
  }
}
 
export default App;

