import React, { Component } from 'react';

class ContactForm extends Component {
    state = { 
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            notes: '',    
     }
     handleChange = (e) =>{
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

     onSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
         this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            notes: '',
            })
     }
     
    render() { 
        return ( 
            <div className= "contact-form container text-center bg-light rounded">
                <form className= "form-group " onSubmit={e=>this.onSubmit(e)}>
                    <label>first name:</label>
                    <input name="firstName" type="text" onChange={e=> this.handleChange(e)} value= { this.state.firstName } />
                    <br/>
                    <label > last name:</label>
                    <input name="lastName"  onChange={e=> this.handleChange(e)} value= {this.state.lastName}/>
                    <br/>
                    <label htmlFor="email" >email:</label>
                    <input name="email" type="email" onChange={e=> this.handleChange(e)} value= {this.state.email}/>
                    <br/>
                    <label htmlFor="phone-number" >phone number:</label>
                    <input name="phoneNumber" type="text" onChange={e=> this.handleChange(e)} value={this.state.phoneNumber}/>
                    <br/>
                    <label htmlFor="notes" >notes:</label>
                    <input  name="notes" type="text" onChange={e=> this.handleChange(e)} value= {this.state.notes}/>
                    <br/>
                    <input type="submit" value="add" />
                </form>
            </div>
         );
    }
}
 
export default ContactForm;