import React, { Component } from 'react';

class ContactForm extends Component {
    state = { 
     }
    render() { 
        return ( 
            <div className= "contact-form container text-center bg-light rounded">
                <form className= "form-group ">
                    <label>first name:</label>
                    <input className="firstName"/>
                    <br/>
                    <label > last name:</label>
                    <input className="lastName"/>
                    <br/>
                    <label htmlFor="email" >email:</label>
                    <input className= "email" type="email"/>
                    <br/>
                    <label htmlFor="phone-number" >phone number:</label>
                    <input className= "phone" type="text"/>
                    <br/>
                    <label htmlFor="notes" >notes:</label>
                    <input className="notes" type="text"/>
                    <br/>
                    <button type= "button" onClick= {this.props.addBtn} className= "btn btn-dark text-center">add</button>
                </form>
            </div>
         );
    }
}
 
export default ContactForm;