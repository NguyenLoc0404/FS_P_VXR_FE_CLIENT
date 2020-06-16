import React, { Component } from 'react';
import { getUser } from "./../../actions/user";
import { createAvatar } from "./../../actions/user";
import { connect } from "react-redux";
import _ from "lodash";
import { baseURL } from "./../../api";
import checkTokenValid from "./../../components/ultils/checkTokenValid";
import setHeader from "./../../components/ultils/setHeader";

class UploadAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            avatar: {},
            file: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        console.log(e.target.files[0],1111111111111);
        this.setState({
            //[e.target.name]: e.target.value,
            file: e.target.files[0]
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log("vao submit");
        console.log(this.state);
        const formData = new FormData();
        formData.append('avatar', this.state.file);
        //formData.append('_id',this.state._id);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };

        console.log(formData.getAll("avatar"));
        this.props.createAvatar(formData
            //,config
            ).then(() => {
            this.props.history.push("/");
        });

        // console.log(config);
        // const { _id, avatar, file
        //     //, password, password2, avatar
        // } = this.state;
        // console.log(file);
        // const user = {
        //     _id, formData,config
        //     // , password, password2, avatar 
        // };
        // console.log(user);
        // // // console.log("UpdateStation -> onSubmit -> station", station);

        // this.props.createAvatar(formData,config).then(() => {
        //     this.props.history.push("/");
        // });
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
            console.log("auth rỗng")
            let decode = checkTokenValid();
            const { token } = decode;
            setHeader(token);
        }
        //console.log("Props: ", props);
        //  console.log("State: ", state);
        //Check khi F5
        if (_.isEmpty(props.selectedUser) && !state._id
            // && !state.avatar
        ) {
            console.log("vo day emmpyttttttttttt UPLOAD AVATAR");

            return {
                _id: props.user && props.user._id,
                avatar: props.user && props.user.avatar,
            };
        }

        if (!state._id) {
            console.log("vo day CO DATA UPLOAD AVATAR");
            return {
                _id: props.selectedUser && props.selectedUser._id,
                avatar: props.selectedUser && props.selectedUser.avatar,
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
                        <h2>Hello {this.props.user.fullName}</h2>
                    </div>
                    {/* Login Form */}
                    <form >
                        <div>
                            <img
                                src={`${baseURL}/${this.state.avatar}`}
                                style={{ width: '240px', height: '240px', borderRadius: '50%' }}
                                alt="link img error" className="card-img-top" />

                        </div>
                        <div>
                            <label >Upload New Avatar</label>
                            <input type="file" className="form-control" name="avatar" placeholder="Select file"
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
    //console.log(state, 111111111111111111)
    return {
        selectedUser: state.layout.selectedUser,
        user: state.user,
        auth: state.auth,
    };
};
export default connect(mapStateToProps, { getUser, createAvatar })(UploadAvatar);