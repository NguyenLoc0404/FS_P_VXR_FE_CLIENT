import React from "react";
import { baseURL } from "./../../api";
const Modal = (props) => {
    console.log("vao modal");
    //console.log(props.station);
    const { name, address, province, _id, description, stationA } = props.station;
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <img
                            src={`${baseURL}/${stationA}`}
                            style={{ width: '240px', height: '240px', borderRadius: '50%' }}
                            alt="link img error" className="card-img-top" />

                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        <span style={{ fontWeight: 'bold' }}>Địa Chỉ: </span>{address}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ fontWeight: 'bold' }}>Tỉnh/Thành Phố: </span>{province}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span style={{ fontWeight: 'bold' }}>Mô Tả: </span>{description}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;



