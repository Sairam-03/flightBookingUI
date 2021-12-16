import { Component } from "react";
import { Link } from "react-router-dom";

class AdminDetails extends Component {

    render() {
        return(
            <div>
                <Link to='/createAirlines'> Create Airines</Link> <br />
                <Link to='/manageAirlines'> Manage Airines</Link>
            </div>
            

        );
    }

}

export default AdminDetails;