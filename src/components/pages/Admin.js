import React from 'react';
import { Redirect } from 'react-router-dom';
import './Admin.css';

class Admin extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password : '',
      flag : false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleNameChange = (event) => {
    this.setState({userName: event.target.value});
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  handleSubmit(event) {
    if(this.state.userName === 'admin' && this.state.password === 'admin') {
      this.setState({flag: true});
    } else {
      console.log('incorrect details');
    }
    event.preventDefault();
    
  }

  render() {
    const { flag } = this.state;
    if (flag) {
      return <Redirect to='/adminDetails'/>;
  }
    return (
      <div className='admin'>
            
            <h2> Admin Login </h2>
      <form>
        <label>User Name</label>
          <div >
                {/* <div className='home_form_elements'> */}
                
                <input type="text" autocomplete="off" 
                value={this.state.userName}
                onChange={this.handleNameChange} >
                </input>
                 </div>
                 <label>Password</label>
                <div>
                
                <input type="password" autocomplete="off" 
                value={this.state.password}
                onChange={this.handlePasswordChange} >
                </input>
           </div>
           {/* <Link to='/userDetails'> */}
           <button onClick={this.handleSubmit.bind(this)}>Login</button>
           {/* </Link> */}
          </form>
        </div>
    );

  }

}

export default Admin;
