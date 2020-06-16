import React from "react";
import Seat from "./Seat";
import api from "../../api";
import { connect } from "react-redux"
import { getTripbyId, resetTripStateWhenSwitch } from "./../../actions/trip";
import _ from "lodash";
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert';
const TripDetail = (props) => {

  console.log('props,', props)
  const { trip } = props;
  console.log("trip._id= " + trip._id);
  const history = useHistory()
  //Mãng rổng chưa ghế đã select
  const [selectedSeats, SetselectedSeats] = React.useState([]);
  console.log(selectedSeats);


  React.useEffect(() => {
    console.log("use effect trip details");
    if (props.trip._id) {
      console.log('props.trip._id', props.trip);
      props.getTripbyId(props.trip._id);
      if (!_.isEmpty(selectedSeats)) {
        console.log(1111111);
        SetselectedSeats([]);
      }
    }
    return () => {
      props.resetTripStateWhenSwitch()
    }
  }, [props.trip._id]);

  const renderSeat = (props) => {

    //return trip.seats.map((seat, index) => {
    return props.tripInfo.seats.map((seat, index) => {
      return (
        <Seat
          key={index}
          seat={seat}
          SetselectedSeats={SetselectedSeats}
          selectedSeats={selectedSeats}
        />
      );
    });
  };


  const bookTicket = () => {
    const tripId = trip._id;
    console.log("vao bookTicket");
    //giữ lại seat code thôi
    const seatCodes = selectedSeats.map((seat) => seat.code);
    console.log("seatCodes, ", seatCodes);
    //khi seatcode rỗng, ko đặt vé
    if (_.isEmpty(seatCodes))
      return;

    api
      .post("/tickets", {
        tripId,
        seatCodes,
      })
      .then((res) => {
        console.log(res);
        console.log("send post bookticket");
        props.getTripbyId(props.trip._id);
        SetselectedSeats([]);
        history.push('/landing')
        // props.tripInfo = {};
      })
      .catch((err) => console.log(err));


  };

  return (

    <div>
      <h4>Nơi Xuất Phát: {trip.fromStationsId.name}</h4>
      <h4>Nơi Đến:{trip.toStationsId.name}</h4>
      <h6>Danh Sách Ghế</h6>
      <div > {!_.isEmpty(props.tripInfo) && renderSeat(props)}</div>
      {/* <div > {renderSeats()}</div> */}

      <button className="btn btn-info" onClick={() => {
        bookTicket();
        swal("Xin Chào!", "Bạn đã Book vé thành công", "success");
      }}>
        Book
      </button>
      {/* <button type="button" className="btn btn-warning ml-2" >Close</button> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    tripInfo: state.trip
  }
}
export default connect(mapStateToProps, { getTripbyId, resetTripStateWhenSwitch })(TripDetail);

//props.tripInfo.seats
