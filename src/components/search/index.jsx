import React from 'react';
import api from "../../api";
import TripDetail from "../trips/TripDetail";
import TripItem from "../trips/TripItem";
import swal from 'sweetalert';

const Search = (props) => {
    console.log("vao search");
    console.log("======asdasdadsa=====", props.location);
    const [arraySearch, setArraySearch] = React.useState([]);
    const [trips, setTrips] = React.useState([]);
    const [trip, setTrip] = React.useState({});
    React.useEffect(() => {
        if (props.match.params.content) {
            api
                .get(`/trips/search/${props.match.params.content}`)
                .then((res) => {
                    setArraySearch(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    if (err.message)
                        swal(`ko tim thay chuyến đi nào Tỉnh nào có tên là : ${props.match.params.content}`);
                    props.history.push("/landing");
                });
        }
    }, [props.location.pathname]);

    const RenderTrips = () => {
        return arraySearch.map((t, index) => {
            return <TripItem trip={t} key={index} index={index} setTrip={setTrip} />;
        });
    };

    return (
        <div className="container pt-4 " style={{ padding: 0 }}>
            <h5 className="fw-medium mb-3 ">Danh Sách Chuyến đi</h5>
            <div className="my-5 container "   >
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Chuyến</th>
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
            {Object.keys(trip).length > 0 && (
                <TripDetail
                    trip={trip}
                />
            )}
        </div>
    );
};

export default Search;


