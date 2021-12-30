import { Component } from "react";
import axios from 'axios';
import ticketDataPNR from "./ticketDataPNR";
class FetchTickets extends Component {
    constructor(props){
        super(props);
        this.state = {
            tickets: [],
            passenger:[],
            pnr: '',
            showResults:''
         };
         this.handlePnr = this.handlePnr.bind(this);
         this.onClickHandler = this.onClickHandler.bind(this);
   }
        handlePnr = (event) => {
            this.setState({pnr: event.target.value});
          };

    onClickHandler() {
        this.setState({showResults : true});
        axios.get(`http://localhost:8081/api/v1.0/flight/ticket/`+this.state.pnr)
          .then((response) => {
              console.log(response.data);
              this.setState({ tickets: response.data, passenger : response.data.passenger});
              console.log(this.state.passenger[0].pname);
          })
          .catch((err) => {
            this.setState({ });
       });
    //    <ticketDataPNR data = {this.state.tickets}/>
      }

     

    render() {
        return(
            <div>
                <center>
                <h1>Ticket History</h1>
                <form>
                    <label>pnr</label><br />
                    <input type="text"
                    value={this.state.pnr}
                    onChange={this.handlePnr}>
                    </input>
                </form> 
                
                    <button onClick={this.onClickHandler} >Fetch Ticket</button>
                    { this.state.showResults ?  
                    <table><tr><br />

                    <table border="1" cellPadding="2" cellSpacing="0"  align="center" border-collapse="collapse" border-color="black" border-multiline="0"> 
                        <tr align="center" >
                            <th>PNR</th>
                            <th>Airline</th>
                            <th>FlightId</th>
                            <th>OnboardDateTime</th>
                            <th>FromPlace</th>
                            <th>ToPlace</th>
                            <th>Email-Id</th>
                            <th>seatCount</th>
                        </tr>
                        <tr align="center">
                            <td >{this.state.tickets.pnr}</td>
                            <td>{this.state.tickets.name}</td>
                            <td>{this.state.tickets.flightId}</td>
                            <td>{this.state.tickets.onboardDateTime}</td>
                            <td>{this.state.tickets.fromPlace}</td>
                            <td>{this.state.tickets.toPlace}</td>
                            <td>{this.state.tickets.emailId}</td>
                            <td>{this.state.tickets.seatCount}</td>
                        </tr>
                    </table>
                    </tr>
                    </table>
                    : null }
                    </center>
            </div>
        );
    }

}

export default FetchTickets;