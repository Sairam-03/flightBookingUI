import { Component } from "react";
import axios from 'axios';
class CreateAirlines extends Component {
    constructor(props){
        super(props);
        this.state = {
            airline:'',
            blockStatus:'',
            flightno:'',
            fromPlace:'',
            instrument:'',
            mealChoice:'',
            onboardDateTime:'',
            terminalDateTime:'',
            roundTrip:'',
            ticketPrice:'',
            toPlace: ''
         };
         this.handleAirline = this.handleAirline.bind(this);
         this.handleBlockStatus = this.handleBlockStatus.bind(this);
         this.handleFlightNo = this.handleFlightNo.bind(this);
         this.handleFromPlace = this.handleFromPlace.bind(this);
         this.handleInstrument = this.handleInstrument.bind(this);
         this.handleOnboardDateTime = this.handleOnboardDateTime.bind(this);
         this.handleTerminalDateTime = this.handleTerminalDateTime.bind(this);
         this.handleMealChoice = this.handleMealChoice.bind(this);
         this.handleRoundTrip = this.handleRoundTrip.bind(this);
         this.handleTicketPrice = this.handleTicketPrice.bind(this);
         this.handleToPlace = this.handleToPlace.bind(this);
         this.onClickHandler = this.onClickHandler.bind(this);
   }
   handleAirline = (event) => {
    this.setState({airline: event.target.value});
   };
   handleBlockStatus = (event) => {
    this.setState({blockStatus: event.target.value});
   };
   handleInstrument = (event) => {
    this.setState({instrument: event.target.value});
   };

   handleFlightNo = (event) => {
    this.setState({flightno: event.target.value});
  };
  handleFromPlace = (event) => {
    this.setState({fromPlace: event.target.value});
  };
  handleMealChoice = (event) => {
    this.setState({mealChoice: event.target.value});
  };
  handleOnboardDateTime = (event) => {
    this.setState({onboardDateTime: event.target.value});
  };
  handleTerminalDateTime = (event) => {
    this.setState({terminalDateTime: event.target.value});
  };
  handleRoundTrip = (event) => {
    this.setState({roundTrip: event.target.value});
  };
  handleTicketPrice = (event) => {
    this.setState({ticketPrice: event.target.value});
  };
  handleToPlace = (event) => {
    this.setState({toPlace: event.target.value});
  };

  onClickHandler() {
    axios.post(`http://localhost:8081/api/v1.0/admin/airlines`,{
        airlineInfos: {
          airline: this.state.airline,
          blockStatus: this.state.blockStatus
        },
        flightid: {
          flightno: this.state.flightno,
          onboardDateTime: this.state.onboardDateTime,
          terminalDateTime: this.state.terminalDateTime
        },
        fromPlace: this.state.fromPlace,
        instrument: this.state.instrument,
        mealChoice: this.state.mealChoice,
        roundTrip: this.state.roundTrip,
        ticketPrice: this.state.ticketPrice,
        toPlace: this.state.toPlace
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
                <h1>Create Airline</h1>
                <form>
                    <label>Airline</label><br />
                    <input type="text"
                    value={this.state.airline}
                    onChange={this.handleAirline}>
                    </input><br />
                    <label>Block Status</label><br />
                    <input type="text"
                    value={this.state.blockStatus}
                    onChange={this.handleBlockStatus}>
                    </input><br />
                    <label>flight Id</label><br />
                    <input type="text"
                    value={this.state.flightno}
                    onChange={this.handleFlightNo}>
                    </input><br />
                    <label>Onboarding Date</label><br />
                    <input type="datetime-local"
                    value={this.state.onboardDateTime}
                    onChange={this.handleOnboardDateTime}>
                    </input><br />
                    <label>Terminal Date</label><br />
                    <input type="datetime-local"
                    value={this.state.terminalDateTime}
                    onChange={this.handleTerminalDateTime}>
                    </input><br />
                    <label>from Place</label><br />
                    <input type="text"
                    value={this.state.fromPlace}
                    onChange={this.handleFromPlace}>
                    </input><br />
                    <label>to Place</label><br />
                    <input type="text"
                    value={this.state.toPlace}
                    onChange={this.handleToPlace}>
                    </input><br />
                    <label>round trip</label><br />
                    <input type="text"
                    value={this.state.roundTrip}
                    onChange={this.handleRoundTrip}>
                    </input><br />
                    <label>ticket price</label><br />
                    <input type="text"
                    value={this.state.ticketPrice}
                    onChange={this.handleTicketPrice}>
                    </input><br />
                    <label>instrument</label><br />
                    <input type="text"
                    value={this.state.instrument}
                    onChange={this.handleInstrument}>
                    </input><br />
                    <label>meal choice</label><br />
                    <input type="text"
                    value={this.state.mealChoice}
                    onChange={this.handleMealChoice}>
                    </input><br />

                    <button onClick={this.onClickHandler} >Create Airline</button>
                </form>
            </div>
            

        );
    }

}

export default CreateAirlines;