import React from "react";
import { baseURL } from "./../../api";
const StationItem = (props) => {
  const { station } = props;
  console.log(station);
  //Hàm trả về hai giá trị
  //giá trị thứ 1 là state (isShowDetail)
  //ham de thay doi state (toogleDetail)              //Giá trị ban đầu
  const [isShowDetail, toogleDetail] = React.useState(false);
  //React.useState (stateless) = this.setState(statefull)
  console.log(isShowDetail);

  return (
    <div className="col-md-3 " 
    // style={{width: "18rem"}}
    >
      <div className="card">
        <img className="card-img-top" src={`${baseURL}/${station.stationA}`} alt="" />
        <div className="card-body">
          <h5 className="card-title">{station.name}</h5>
          <p className="card-text">{station.description}</p>
          {/* <button
            className="btn btn-info"
            onClick={() => toogleDetail(!isShowDetail)}
          >
            Details
          </button> */}
          <button
            type="button"
            className="btn btn-primary ml-2"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => props.setStation(station)}
          >
            Details
          </button>
          {isShowDetail && (
            <div>
              <p className="card-text">{station.address}</p>
              <p className="card-text">{station.province}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StationItem;
