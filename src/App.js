import React, { Component } from 'react';
import Header from './components/header';
import Display from './components/display.jsx'
import ContactForm from './components/ContactForm'
import './App.css';


class App extends Component {
  state = { 
    contact :[
        {firstName: "Jacob"},
        {lastName: "McCaskey"},
        {email: "mccaskey316@gmail.com"},
        {phoneNumber: "813.516.0468"},
        {notes: "Really wants to learn React"}
      ]
 }

 openForm = ()=> {
   this.displayForm()
}

formSubmit= ()=>{
  let firstName= <div>{document.querySelector('.firstName').value}</div>;
  const displayBox= document.querySelector('.displayBox');
  this.hideForm()
  
  }

displayForm= ()=> {
  let displayForm = document.querySelector('.contact-form');
  displayForm.style.display= "inline";
}
hideForm = ()=> {
  document.querySelector('.contact-form').style.display = "none";
}
  
  render() { 
    const { contact }= this.state;
    console.log(this.state);
    return ( 
      <React.Fragment>
      < Header openForm= {()=> this.openForm()}/>
     
     {contact.map(item => (
       < Display       
       firstName= {item.firstName }
       lastName = {item.lastName}
       email = {item.email}
       phoneNumber = {item.phoneNumber}
       notes = {item.notes}
       />
     ))}
      {/* < Display       
        firstName= {this.state.contact.firstName}
        lastName = {this.state.contact.lastName}
        email = {this.state.contact.email}
        phoneNumber = {this.state.contact.phoneNumber}
        notes = {this.state.contact.notes}
        /> */}
        < ContactForm addBtn={()=> this.formSubmit()}/>
      </React.Fragment>
     );
  }
}
 
export default App;

