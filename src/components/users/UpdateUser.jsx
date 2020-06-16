import React, { Component } from 'react';
import { getUser } from "./../../actions/user";
import { putUser } from "./../../actions/user";
import { connect } from "react-redux";
import _ from "lodash";
import checkTokenValid from "./../../components/ultils/checkTokenValid";
import setHeader from "./../../components/ultils/setHeader";
import swal from 'sweetalert';
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      email: "",
      fullName: "",
      // password: "",
      // password2: "",
      // avatar: [],
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
    const { _id, email, fullName
      //, password, password2, avatar
    } = this.state;
    const user = {
      _id, email, fullName
      // , password, password2, avatar 
    };

    // console.log("UpdateStation -> onSubmit -> station", station);

    this.props.putUser(user).then(() => {
      this.props.history.push("/");
    })
      .catch(err => {
        console.log(err);
        if (err.email)
          swal(`${err.email}`)
        else if (err.fullName)
          swal(`${err.fullName}`)

      })
      ;
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
    if (_.isEmpty(props.selectedUser) && !state.email && !state.fullName) {
      console.log("vo day emmpyttttttttttt")
      //   const { userId } = props.match.params;
      //   //console.log(stationId);
      //   const index = props.users.findIndex((s) => s._id === userId);
      //   // console.log(props.stations[index])
      return {
        _id: props.user && props.user._id,
        email: props.user && props.user.email,
        fullName: props.user && props.user.fullName,
        // password: props.user && props.user.password,
        // password2: props.user && props.user.password2,
        // avatar: props.user && props.user.avatar,
      };
    }

    if (!state.email && !state.fullName) {
      return {
        _id: props.selectedUser && props.selectedUser._id,
        email: props.selectedUser && props.selectedUser.email,
        fullName: props.selectedUser && props.selectedUser.fullName,
        // password: props.selectedUser && props.selectedUser.password,
        // password2: props.selectedUser && props.selectedUser.password2,
        // avatar: props.selectedUser && props.selectedUser.avatar,
      };
    }
    return {}
  }
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          {/* Icon */}
          <div className="fadeIn first">
            <h2>Update User</h2>
          </div>
          {/* Login Form */}
          <form>
            <div>
              <label >Email address</label>
              <input type="text" className="form-control" value={this.state.email}
                name="email"
                onChange={this.onChange} />

            </div>
            <div>
              <label >Full Name</label>
              <input type="text" className="form-control" value={this.state.fullName}
                name="fullName"
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
export default connect(mapStateToProps, { getUser, putUser })(UpdateUser);