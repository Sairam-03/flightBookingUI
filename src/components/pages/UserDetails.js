import { Component } from "react";
import { Link } from "react-router-dom";

class UserDetails extends Component {

    render() {
        return(
            <div>
                <Link to='/bookTickets'> Book tickets </Link> <br />
                <Link to='/fetchTickets'> Fetch tickets </Link> <br />
                <Link to='/cancelTickets'> Cancel tickets </Link>
            </div>
        );
    }

}

export default UserDetails;