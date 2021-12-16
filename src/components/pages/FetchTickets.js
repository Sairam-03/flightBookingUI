import { Component } from "react";
class FetchTickets extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>pnr</label><br />
                    <input type="text">
                    </input><br />

                    <button>Fetch Ticket</button>
                </form> 
            </div>
        );
    }

}

export default FetchTickets;