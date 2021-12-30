import { Component } from "react";
import axios from 'axios';
class ManageAirlines extends Component {

    constructor(props){
        super(props);
        this.state = {
            blockStatus : '',
            airline : ''
         };
         this.handleBlockStatus = this.handleBlockStatus.bind(this);
         this.handleAirLine = this.handleAirLine.bind(this);
         this.onClickHandler = this.onClickHandler.bind(this);
   }
    handleBlockStatus = (event) => {
            this.setState({blockStatus: event.target.value});
          };
          handleAirLine = (event) => {
            this.setState({airline: event.target.value});
          };
          onClickHandler() {
              console.log(this.state.airline);
              console.log(this.state.blockStatus);
            axios.post('http://localhost:8081/api/v1.0/admin/UpdateBlocker',{
                airline:this.state.airline,
                blockStatus: this.state.blockStatus
            })
              .then((response) => {
                  console.log(response.data);
                  alert(this.state.airline + ' airline is blocked successfully');
                  
              })
              .catch((err) => {
                this.setState({ });
           });
        //    <ticketDataPNR data = {this.state.tickets}/>
          }


    render() {
        return(
            <div>
                <h1>Manage Airlines</h1>
                <form>
                    <label>Airline</label><br />
                    <input type="text"
                    value={this.state.airline}
                    onChange={this.handleAirLine}>
                    </input><br />
                    {/* <label>Flight Id</label><br />
                    <input type="text">
                    </input><br /> */}
                    <label>Block status</label><br />
                    <input type="text"
                    value={this.state.blockStatus}
                    onChange={this.handleBlockStatus}>
                    </input><br />

                    
                </form>
                <button onClick={this.onClickHandler}>Modify Airline</button>
            </div>
            

        );
    }

}

export default ManageAirlines;