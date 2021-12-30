import React from 'react';

const ticketDataPNR = (props) => {
    return(
        <div>
            <table>
                        <tr>
                            <th>PNR</th>
                            <th>Airline</th>
                            <th>flightId</th>
                            <th>onboardDateTime</th>
                            <th>fromPlace</th>
                            <th>toPlace</th>
                            <th>emailId</th>
                            <th>seatCount</th>
                        </tr>
                        <tr>
                            <td>{props.tickets.pnr}</td>
                            <td>{this.state.tickets.name}</td>
                            <td>{this.state.tickets.flightId}</td>
                            <td>{this.state.tickets.onboardDateTime}</td>
                            <td>{this.state.tickets.fromPlace}</td>
                            <td>{this.state.tickets.toPlace}</td>
                            <td>{this.state.tickets.emailId}</td>
                            <td>{this.state.tickets.seatCount}</td>
                        </tr>
                    </table>
        </div>
    );

}

export default ticketDataPNR;