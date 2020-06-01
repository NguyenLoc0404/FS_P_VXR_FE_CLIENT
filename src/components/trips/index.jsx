import React from "react";
import api from "./../../api";
import LoginRequest from "./../loginRequest";
import TripItem from "./TripItem";
import TripDetail from "./TripDetail";
import { connect } from "react-redux";

const Trip = (props) => {
  const [trips, setTrips] = React.useState([]);
  const [trip, setTrip] = React.useState({});


  React.useEffect(() => {
    api
      .get("trips")
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log("trip dc chon");
  // console.log(trip);
  const RenderTrips = () => {
    return trips.map((t, index) => {
      return <TripItem trip={t} key={index} index={index} setTrip={setTrip} />;
    });
  };


  return (
    <div className="container pt-4 " style={{padding: 0}}>
      <h5 className="fw-medium mb-3 ">Danh Sách Chuyến đi</h5>
      {props.auth.isAuthenticated ?
        <div className="my-5 container "   >
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Nơi Xuất Phát</th>
                <th>Nơi Đến</th>
                <th>Giá Tiền</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {RenderTrips()}
            </tbody>
          </table>
        </div>
        : <LoginRequest />
      }
      {Object.keys(trip).length > 0 && (
        <TripDetail
          trip={trip}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(Trip);
