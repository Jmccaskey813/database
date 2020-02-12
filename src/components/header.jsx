import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Header extends Component {
    

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

