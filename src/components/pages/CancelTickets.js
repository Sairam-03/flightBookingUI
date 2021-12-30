import { Component } from "react";
import axios from 'axios';
class CancelTickets extends Component {
    constructor(props){
        super(props);
        this.state = {
            pnr: ''
         };
         this.handlePnr = this.handlePnr.bind(this);
         this.onClickHandler = this.onClickHandler.bind(this);
   }
        handlePnr = (event) => {
            this.setState({pnr: event.target.value});
          };
          onClickHandler() {
            axios.delete(`http://localhost:8081/api/v1.0/flight/cancel/`+this.state.pnr)
              .then((response) => {
                  console.log(response.data);
                  alert('Ticket cancelled successfully');
                  
              })
              .catch((err) => {
                this.setState({ });
           });
          }

    render() {
        return(
            <div>
                <center>
                <h1>Cancel Ticket</h1>
                <form>
                    <label>pnr</label><br />
                    <input type="text"
                    value={this.state.pnr}
                    onChange={this.handlePnr}>
                    </input><br />
                </form> 
                <button onClick={this.onClickHandler}>Cancel Ticket</button>
                </center>
            </div>
        );
    }

}

export default CancelTickets;