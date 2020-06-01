import React from 'react';
import { baseURL } from "./../../api";

import { connect } from "react-redux";
import { getUser } from "./../../actions/user";
import { setSelectedUser } from "../../actions/layout";
const User = (props) => {
    React.useEffect(() => {
        if (props.match.params.userId) {
            props.getUser(props.match.params.userId);
        }
    }, []);

    console.log(props);
    let userBackUp = {};
    if (props.user) {
        userBackUp = props.user;
        //const {user} = props;
    }
    console.log(userBackUp);
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                    <h2>Xin Chao {userBackUp.fullName}</h2>
                </div>
                <div className="card">
                    <img src={`${baseURL}/${userBackUp.avatar}`} alt="link img error" className="card-img-top"
                        
                    />
                    <div className="card-body">
                        <h5 className="card-title">Full Name:  {userBackUp.fullName}</h5>
                        <p className="card-text">Email: {userBackUp.email}</p>
                        <p className="card-text">Password: {userBackUp.password}</p>
                        <p className="card-text">UserType: {userBackUp.userType}</p>
                        <button type="button" className="btn btn-primary "
                            onClick={() => {
                                props.history.push(
                                    `/users/update-user/${userBackUp._id}`
                                );
                                props.setSelectedUser(userBackUp);
                            }}
                        >Edit Profile</button>
                        <br />
                        <button type="button" className="btn btn-success mt-2"
                            onClick={() => {
                                props.history.push(
                                    `/users/update-password/${userBackUp._id}`
                                );
                                props.setSelectedUser(userBackUp);

                            }}
                        >Change Password</button>
                        <br />
                        <button type="button" className="btn btn-warning mt-2"
                            onClick={() => {
                                props.history.push(
                                    `/users/update-avatar/${userBackUp._id}`
                                );
                                props.setSelectedUser(userBackUp);
                            }}
                        >Change Avatar</button>
                    </div>
                </div>

            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { getUser, setSelectedUser })(User);