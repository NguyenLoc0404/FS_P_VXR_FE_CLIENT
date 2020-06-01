import React from 'react';
import api from "./../../api";
const onSubmit = (e, email, fullName, password, password2, props) => {
    console.log(" vao on submit");
    e.preventDefault();
    const credentials = { email, fullName, password, password2 };
    console.log(credentials);
    api.post("/users" , credentials)
    .then((res) =>{
        console.log(res.data);
        props.history.push("/landing");
    
    })
    .catch((err) => console.log(err));
};
const CreateUser = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, SetPassword] = React.useState('');
    const [password2, SetPassword2] = React.useState('');
    const [fullName, SetfullName] = React.useState('');
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/* Tabs Titles */}
                {/* Icon */}
                <div className="fadeIn first">
                    <h2>REGISTER</h2>
                </div>
                {/* Login Form */}
                <form>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="text" id="fullName" className="fadeIn second" name="fullName" placeholder="Full Name"
                        onChange={e => SetfullName(e.target.value)}
                    />
                    <input type="password" id="password" className="fadeIn third" name="password" placeholder="Password"
                        onChange={e => SetPassword(e.target.value)}
                    />
                    <input type="password" id="password2" className="fadeIn third" name="password" placeholder="Password Confirm"
                        onChange={e => SetPassword2(e.target.value)}
                    />
                    <input type="submit" className="fadeIn fourth" defaultValue="Log In"
                        onClick={e => onSubmit(e, email, fullName, password, password2,props)}
                    />
                </form>
                {/* Remind Passowrd */}
                {/* <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div> */}
            </div>
        </div>
    );
};

export default CreateUser;