import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Display extends Component {
    state = { 
     }
  

    render() { 
        const { firstName, lastName, email, notes, phoneNumber} = this.props;
        return (     
            <React.Fragment>
                
            
            <div className= "container bg-light displayBox sm-2">
                <span className="l-3">
                    {firstName} {lastName}
                </span>
                <span> |  { email }</span>
                <span>  | { phoneNumber }</span>
                <span className= "overflow-hidden">  | notes: { notes }</span>
            </div>
            
            </React.Fragment>
         );
    }

}
 
export default Display;

