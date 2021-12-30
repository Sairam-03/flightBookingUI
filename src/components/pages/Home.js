import React, { Component } from 'react';
import axios from 'axios';
import './Home.css'
import { Table } from 'semantic-ui-react';
// import image from '../img/background.jpg';
class Home extends Component {
      constructor(props){
            super(props);
            this.state = {
                fromPlace: '',
                toPlace:'',
                onboardDate:'',
                onboardTime:'',
                result:[],
                showResults:''
                
             };
             this.handleFromPlace = this.handleFromPlace.bind(this);
             this.handleOnboardDate = this.handleOnboardDate.bind(this);
             this.handleOnboardTime = this.handleOnboardTime.bind(this);
             this.handleToPlace = this.handleToPlace.bind(this);
             this.renderTable = this.renderTable.bind(this);
             this.onClickHandler = this.onClickHandler.bind(this);
       }

       handleFromPlace = (event) => {
            this.setState({fromPlace: event.target.value});
          };
          handleToPlace = (event) => {
            this.setState({toPlace: event.target.value});
          };
          handleOnboardDate = (event) => {
            this.setState({onboardDate: event.target.value});
          };
          handleOnboardTime = (event) => {
            this.setState({onboardTime: event.target.value});
          };

          onClickHandler() {
            this.setState({showResults : true});
            axios.post(`http://localhost:8081/api/v1.0/flight/search`,{
                fromPlace:this.state.fromPlace,
                onboardDate:this.state.onboardDate,
                onboardTime:this.state.onboardTime,
                toPlace:this.state.toPlace,
            })
              .then((response) => {
                  console.log(response.data);
                  this.setState({result:response.data });
                  console.log(this.state.result[0].flightid);
              })
              .catch((err) => {
                this.setState({ });
           });
        //    <ticketDataPNR data = {this.state.tickets}/>
          }
           renderTable() {
            return this.state.result.map(data => {
              return (
                <tr>
                  <td>{data.flightid.flightno}</td>
                  <td>{data.flightid.onboardDateTime}</td>
                  <td>{data.fromPlace}</td>
                  <td>{data.toPlace}</td> 
                  <td>{data.ticketPrice}</td>
                  <td>{data.airlineInfos.airline}</td> 
                </tr>
              )
            })
          }
       render() {
            return (
                  <div className='home'>
                  <form >
                  {/* <div className='home'> */}
                        {/* <div className='home_form_elements'> */}
                        <input type="text" autocomplete="off" value="" 
                        placeholder="FROM"
                        value={this.state.fromPlace}
                    onChange={this.handleFromPlace}></input>
                        {/* </div>
                        <div> */}
                        <input type="text" autocomplete="off" value=""  
                        placeholder="TO"
                        value={this.state.toPlace}
                    onChange={this.handleToPlace}></input>
                        {/* </div>
                        <div> */}
                        <input type="date" autocomplete="off" value="" 
                        placeholder="Departure Date"
                        value={this.state.onboardDate}
                    onChange={this.handleOnboardDate}></input>
                        {/* </div> */}
                        <input type="time" autocomplete="off" value="" 
                        placeholder="Departure Time"
                        value={this.state.onboardTime}
                    onChange={this.handleOnboardTime}></input><br/>
                   {/* </div> */}
                   
                   
                  </form>
                  <button onClick={this.onClickHandler}>Search Flights</button> <br/>
                  { this.state.showResults ? 
                        <table>
                              <thead>
                              <tr>
                                    <th>flightId</th>
                                    <th>onboardDateTime</th>
                                    <th>fromPlace</th>
                                    <th>toPlace</th>
                                    <th>Ticket price</th>
                                    <th>Airline</th>
                              </tr>
                              </thead>
                              <tbody>
                              {this.renderTable}
                                    {/* <td>{this.state.tickets.pnr}</td>
                                    <td>{this.state.tickets.name}</td>
                                    <td>{this.state.tickets.flightId}</td>
                                    <td>{this.state.tickets.onboardDateTime}</td>
                                    <td>{this.state.tickets.fromPlace}</td>
                                    <td>{this.state.tickets.toPlace}</td>
                                    <td>{this.state.tickets.emailId}</td>
                                    <td>{this.state.tickets.seatCount}</td> */}
                              </tbody>
                        </table>
                      :null }
                  
            
                
                  </div>
            );
       }


}

export default Home;
