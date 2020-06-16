import React from "react";
import LoginRequest from "./../loginRequest";
import StationItem from "./StationItem";
//import data from "./../mockup/station";
import { connect } from "react-redux";
import api from "../../api";
import Modal from "./Modal";
const Station = (props) => {
  //console.log(data);
  const [station, setStation] = React.useState({});
  const [Stations, SetStations] = React.useState([]);
  //useEffect thay thế cho ComponentDidMount và ComponentDidUpdate
  //componentWillRecivePróp => static getDerivedStateFromProps

  React.useEffect(() => {
    api
      .get("/stations")
      .then((res) => {
        SetStations(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(arrStation);

  const RenderStations = () => {
    return Stations.map((s, index) => {
      return (
        <StationItem
          station={s}
          //key khác props, ko  thể mang key qua props được
          // phải truyền bằng tham số khác
          key={index}
          index={index}
          setStation={setStation}
        />
      );
    });
  };

  return (
    <div className="container pt-4">
      <h5 className="fw-medium mb-3"> Danh Sách Bến Xe</h5>
      <div className="row">
        {props.auth.isAuthenticated ? RenderStations() : <LoginRequest />}
      </div>
      <Modal station={station} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, null)(Station);
