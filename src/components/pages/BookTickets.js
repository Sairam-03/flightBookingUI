import { Component } from "react";
class BookTickets extends Component {

    render() {
        return(
            <div>
                <form>
                    <label>flight Id</label><br />
                    <input type="text">
                    </input><br />
                    <label>Onboardingdate</label><br />
                    <input type="date">
                    </input><br />
                    <label>from Place</label><br />
                    <input type="text">
                    </input><br />
                    <label>to Place</label><br />
                    <input type="text">
                    </input><br />
                    <label>passenger name</label><br />
                    <input type="text">
                    </input><br />
                    <label>email</label><br />
                    <input type="text">
                    </input><br />
                    <label>instrument</label><br />
                    <input type="text">
                    </input><br />
                    <label>seat count</label><br />
                    <input type="text">
                    </input><br />

                    <button>Book Ticket</button>
                </form>
            </div>
        );
    }

}

export default BookTickets;