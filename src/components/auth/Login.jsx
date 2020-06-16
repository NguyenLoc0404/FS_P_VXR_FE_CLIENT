import React from 'react';
import { login } from "./../../actions/auth";
import { connect } from "react-redux";
import { setIsLogin } from "./../../actions/layout";
import swal from 'sweetalert';
const onSubmit = (e, email, password, props) => {
    console.log(" vao on submit");
    e.preventDefault();
    const credentials = { email, password };
    console.log(credentials);
    props.login(credentials)
        .then(res => {
            console.log("vao push");
            //console.log(res.data);
            props.setIsLogin(true);
            props.history.push("/landing");
            console.log("donne push");
        })
        .catch((err) => {
            console.log(err.response.data);
            if(err.response.data.message)
                swal(`${err.response.data.message}`)
        });

    // this.props
    //   .login(credentials)
    //   .then(() => {
    //     this.props.history.push("/manager");
    //   })
    //   .catch((err) =>  alert("Đăng nhập thất bại"));
};
const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, SetPassword] = React.useState('');
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                    <h2>Login</h2>
                </div>
                {/* Login Form */}
                <form>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password"
                        onChange={e => SetPassword(e.target.value)}
                    />
                    <input type="submit" className="fadeIn fourth" defaultValue="Log In"
                        onClick={e => { onSubmit(e, email, password, props) }} />
                </form>
                {/* Remind Passowrd */}
                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>

    );
};

export default connect(null, {
    login, setIsLogin
})(Login);