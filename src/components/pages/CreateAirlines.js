import { Component } from "react";
class CreateAirlines extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>Airline</label><br />
                    <input type="text">
                    </input><br />
                    <label>flight Id</label><br />
                    <input type="text">
                    </input><br />
                    <label>from Place</label><br />
                    <input type="text">
                    </input><br />
                    <label>to Place</label><br />
                    <input type="text">
                    </input><br />
                    <label>round trip</label><br />
                    <input type="text">
                    </input><br />
                    <label>ticket price</label><br />
                    <input type="text">
                    </input><br />
                    <label>instrument</label><br />
                    <input type="text">
                    </input><br />
                    <label>meal choice</label><br />
                    <input type="text">
                    </input><br />

                    <button>Create Airline</button>
                </form>
            </div>
            

        );
    }

}

export default CreateAirlines;