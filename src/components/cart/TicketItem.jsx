import React from 'react';
import { deleteTicket } from "./../../actions/ticket";
import { connect } from "react-redux";
const renderSeat = (seatArray) => {
    console.log(seatArray, 4444)
    return seatArray.map((seat, index) => {
        return (
            <button className="mdc-button--outlined" key={index}>
                <div className="mdc-button__ripple"></div>
                <span className="mdc-button__label">{seat.code}</span>
            </button>
        );
    });
};
const TicketItem = (props) => {
    //const [isDelete, SetisDelete] = React.useState(false);
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.ticket.tripId.fromStationsId.name}</td>
            <td>{props.ticket.tripId.toStationsId.name}</td>
            <td>{props.ticket.userId.fullName}</td>
            <td>{renderSeat(props.ticket.seats)}</td>
            <td>{props.ticket.totalPrice}</td>
            <td><button
                className="btn btn-danger "
                onClick={() => {
                   props.deleteTicket(props.ticket._id);
                }}
            >
                Xoa
        </button></td>
        </tr>
    );
};

export default connect(null, { deleteTicket })(TicketItem);