import { Component } from "react";
class CancelTickets extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>pnr</label><br />
                    <input type="text">
                    </input><br />

                    <button>Cancel Ticket</button>
                </form> 
            </div>
        );
    }

}

export default CancelTickets;