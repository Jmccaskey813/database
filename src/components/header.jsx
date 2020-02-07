import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    state = {   }
//     constructor() {
//         super()
//         this.handleClick.bind(this);
//     }
// handleClick() {
//     console.log('button works!');    
// }
    

    render() { 
        return (          
            <div className="text-center mt-2 bg-light">
                <h1>Contacts</h1>
                <div className= "text-center">
                    <button type= "submit" onClick= {this.props.openForm} className=" btn btn-dark"> add contact</button>
                    </div>
            </div>
         );
    }

}
 
export default Header;

