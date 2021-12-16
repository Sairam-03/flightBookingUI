import { Component } from "react";
class ManageAirlines extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>Airline</label><br />
                    <input type="text">
                    </input><br />
                    <label>Flight Id</label><br />
                    <input type="text">
                    </input><br />
                    <label>Block status</label><br />
                    <input type="text">
                    </input><br />

                    <button>Modify Airline</button>
                </form>
            </div>
            

        );
    }

}

export default ManageAirlines;