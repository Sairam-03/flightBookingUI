import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/pages/User';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';
import Navbar from './components/Navbar/Navbar';
import UserDetails from './components/pages/UserDetails';
import AdminDetails from './components/pages/AdminDetails';
import CreateAirlines from './components/pages/CreateAirlines';
import ManageAirlines from './components/pages/ManageAirlines';
import BookTickets from './components/pages/BookTickets';
import FetchTickets from './components/pages/FetchTickets';
import CancelTickets from './components/pages/CancelTickets';

function App() {
return (
  <div style={{ backgroundImage: "url(/flight.png)", width : '100%', backgroundRepeat : 'repeat' }}>
	<Router>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/user' component={User} />
        <Route path='/admin' component={Admin} />
        <Route path='/userDetails' component={UserDetails} />
        <Route path='/adminDetails' component={AdminDetails} />
        <Route path='/createAirlines' component={CreateAirlines} />
        <Route path='/manageAirlines' component={ManageAirlines} />
        <Route path='/bookTickets' component={BookTickets} />
        <Route path='/fetchTickets' component={FetchTickets} />
        <Route path='/cancelTickets' component={CancelTickets} />
	</Switch>
	</Router>
  </div>
);
}

export default App;
