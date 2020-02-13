import React, { Component } from 'react';
import Header from './components/header';
// import Display from './components/display.jsx'
import ContactForm from './components/ContactForm'
import './App.css';
var contacts= []


class App extends Component {
  state = {
    fields: [{ 
        firstName: "Jacob",
        lastName: "McCaskey",
        email: "mccaskey316@gmail.com",
        phoneNumber: "813.516.0468",
        notes: "Really wants to learn React"    
    }]   
 }


 openForm = ()=> {
   this.displayForm()
}

onSubmit= (fields)=>{
  contacts.push(fields);
  this.setState({
    fields : contacts
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



delete= (key)=> {
  var filteredContacts = this.state.fields.filter( item=> ( 
     item.lastName !== key
  ));
  this.setState({
    fields: filteredContacts
  })
  console.log(key);
};

createContact(person) {
  const key= person.lastName
  return  <div className= "container bg-light displayBox sm-2" key={person.lastName}>
    <span className="l-3">
        {person.firstName} {person.lastName}
    </span>
    <span> |  { person.email }</span>
    <span>  | { person.phoneNumber }</span>
    <span className= "overflow-hidden">  | notes: { person.notes }</span>
    <button onClick= {()=> this.delete(key)}>delete</button>
</div>
}



  render() { 
    var toInput = this.state.fields;
    var entries = toInput.map(this.createContact);
    return ( 
      <React.Fragment>
      < Header openForm= {()=> this.openForm()}/>
        <div >{ entries } </div>
        < ContactForm 
          onSubmit={fields=> this.onSubmit(fields)}
        />
      </React.Fragment>
     );
  }
}
 
export default App;

