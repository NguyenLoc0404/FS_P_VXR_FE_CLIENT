import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import checkTokenValid from "./../../components/ultils/checkTokenValid";
import setHeader from "./../../components/ultils/setHeader";
import { getUser } from "./../../actions/user";
import { patchUser } from "./../../actions/user";
class UpdatePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            password: "",
        };
    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log("vao submit");
        console.log(this.state);
        const { _id, 
            //email, fullName
             password
        } = this.state;
        const user = {
            _id, 
            //email, fullName
            password 
        };
        //console.log()
        // console.log("UpdateStation -> onSubmit -> station", station);

        this.props.patchUser(user).then(() => {
            this.props.history.push("/");
        });
    };

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        console.log(props);
        console.log(state);
        if (_.isEmpty(props.user)) {
          props.getUser(props.match.params.userId);
        }
        //check đã đăng  nhập => sau đó set header cho component Update
        if (!_.isEmpty(props.auth)) {
          let decode = checkTokenValid();
          const { token } = decode;
          setHeader(token);
        }
        //console.log("Props: ", props);
        //  console.log("State: ", state);
        //Check khi F5
        if (_.isEmpty(props.selectedUser) && !state._id) {
          console.log("vo day emmpyttttttttttt")
          return {
            _id: props.user && props.user._id,
          };
        }
    
        if (!state._id) {
          return {
            _id: props.selectedUser && props.selectedUser._id,
          };
        }
      }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    {/* Icon */}
                    <div className="fadeIn first">
                        <h2>Update Password</h2>
                    </div>
                    {/* Login Form */}
                    <form>
                        <div>
                            <label >Password</label>
                            <input type="text" className="form-control" value={this.state.password}
                                name="password"
                                onChange={this.onChange} />

                        </div>
                        <input type="submit" className="fadeIn fourth"
                            onClick={e => this.onSubmit(e)}
                        />

                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    console.log(state, 111111111111111111)
    return {
        selectedUser: state.layout.selectedUser,
        user: state.user,
        auth: state.auth,
    };
};
export default connect(mapStateToProps,{getUser,patchUser})(UpdatePassword);