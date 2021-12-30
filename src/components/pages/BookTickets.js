import { Component } from "react";
import axios from 'axios';
class BookTickets extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailId: '',
            flightId:'',
            fromPlace:'',
            name:'',
            passenger:[],
            onboardDateTime:'',
            passengerAge:'',
            passengerGender:'',
            passengerName:'',
            seatCount:'',
            toPlace: ''
         };
         this.handleEmailId = this.handleEmailId.bind(this);
         this.handleFlightId = this.handleFlightId.bind(this);
         this.handleFromPlace = this.handleFromPlace.bind(this);
         this.handleName = this.handleName.bind(this);
         this.handleOnboardDateTime = this.handleOnboardDateTime.bind(this);
         this.handlePassengerAge = this.handlePassengerAge.bind(this);
         this.handlePassengerGender = this.handlePassengerGender.bind(this);
         this.handlePassengerName = this.handlePassengerName.bind(this);
         this.handleSeatCount = this.handleSeatCount.bind(this);
         this.handleToPlace = this.handleToPlace.bind(this);
         this.onClickHandler = this.onClickHandler.bind(this);
   }
   handleEmailId = (event) => {
    this.setState({emailId: event.target.value});
   };

   handleFlightId = (event) => {
    this.setState({flightId: event.target.value});
  };
  handleFromPlace = (event) => {
    this.setState({fromPlace: event.target.value});
  };
  handleName = (event) => {
    this.setState({name: event.target.value});
  };
  handleOnboardDateTime = (event) => {
    this.setState({onboardDateTime: event.target.value});
  };
  handlePassengerAge = (event) => {
    this.setState({passengerAge: event.target.value});
  };
  handlePassengerGender = (event) => {
    this.setState({passengerGender: event.target.value});
  };
  handlePassengerName = (event) => {
    this.setState({passengerName: event.target.value});
  };
  handleSeatCount = (event) => {
    this.setState({seatCount: event.target.value});
  };
  handleToPlace = (event) => {
    this.setState({toPlace: event.target.value});
  };

  onClickHandler() {
    axios.post(`http://localhost:8081/api/v1.0/flight/booking/`+this.state.flightId,{
        emailId:this.state.emailId,
        flightId:this.state.flightId,
        fromPlace:this.state.fromPlace,
        name:this.state.name,
        onboardDateTime:this.state.onboardDateTime,
        passenger: [
            {
                age:this.state.passengerAge,
                gender:this.state.passengerGender,
                pname:this.state.passengerName
            }
          ],
        
        seatCount:this.state.seatCount,
        toPlace:this.state.toPlace
        
    })
      .then((response) => {
          console.log(response.data);
          alert(response.data);
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
                <h1>Ticket Booking</h1>
                <form> 
                    <label>Email</label><br />
                    <input type="text"
                    value={this.state.emailId}
                    onChange={this.handleEmailId}>
                    </input><br />
                    <label>Flight Id</label><br />
                    <input type="text"
                    value={this.state.flightId}
                    onChange={this.handleFlightId}>
                    </input><br />
                    <label>From Place</label><br />
                    <input type="text"
                    value={this.state.fromPlace}
                    onChange={this.handleFromPlace}>
                    </input><br />
                    <label>Airline</label><br />
                    <input type="text"
                    value={this.state.name}
                    onChange={this.handleName}>
                    </input><br />
                    <label>Onboardingdate</label><br />
                    <input type="datetime-local"
                    value={this.state.onboardDateTime}
                    onChange={this.handleOnboardDateTime}>
                    </input><br />
                    <label>Passenger age</label><br />
                    <input type="text"
                    value={this.state.passengerAge}
                    onChange={this.handlePassengerAge}>
                    </input><br />
                    <label>Passenger Gender</label><br />
                    <input type="text"
                    value={this.state.passengerGender}
                    onChange={this.handlePassengerGender}>
                    </input><br />
                    <label>Passenger Name</label><br />
                    <input type="text"
                    value={this.state.passengerName}
                    onChange={this.handlePassengerName}>
                    </input><br />
                    <label>Seat count</label><br />
                    <input type="text"
                    value={this.state.seatCount}
                    onChange={this.handleSeatCount}>
                    </input><br />
                    <label>To Place</label><br />
                    <input type="text"
                    value={this.state.toPlace}
                    onChange={this.handleToPlace}>
                    </input><br />
                </form>
                <button onClick={this.onClickHandler}>Book Ticket</button>
                </center>
            </div>
        );
    }

}

export default BookTickets;