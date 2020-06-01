import React from "react";

const TripItem = (props) => {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.trip.fromStationsId.name}</td>
      <td>{props.trip.toStationsId.name}</td>
      <td>{props.trip.price}</td>
      <td>
        <button
          className="btn btn-success " 
          onClick={() => {
            props.setTrip(props.trip);
          }}
        >
          Booking
        </button>
      </td>
    </tr>
  );
};

export default TripItem;
