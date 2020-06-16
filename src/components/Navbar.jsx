import React from "react";
import { Link } from "react-router-dom";
import { logout } from "./../actions/auth";
import { connect } from "react-redux";
import { setIsLogin } from "./../actions/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'


// import swal from 'sweetalert';
//stateless component  = functional component;
//stateful component =  class based component;
import checkTokenValid from "./../components/ultils/checkTokenValid";
import setHeader from "./../components/ultils/setHeader";
import _ from "lodash";
import { useHistory } from 'react-router-dom';
 

const Navbar = (props) => {
  const linkstyle = { color: "black", textDecoration: "none" };
  const linkstyle2 = { ...linkstyle, marginLeft: "20px" };

  const [content, setContent] = React.useState('');
  const history = useHistory();

  // useScript('./../../src/jsAnimation/removeActive');
  const onSubmit = (e,props,content) => {
    // console.log('props==================', props)
    e.preventDefault();

    history.push(`/booking/${content}`);
  };
  
  React.useEffect(() => {

    console.log("use efffect");
    let decode = checkTokenValid();
    console.log(decode);
    if (!_.isEmpty(decode)) {
      const { decoded, token } = decode;
      console.log(decoded);
      setHeader(token);
      if (decoded) {
        props.setIsLogin(true);
      }
    }
    
    
  }, []);
  


  const { decode } = props.auth;
  console.log(decode);
  // console.log(isAuthenticated);
  return (
    <div id="myDIV">

      <nav className="navbar navbar-expand-sm navbar-light bg-light  container">
        <a className="navbar-brand" href="#">
          <img src="https://storage.googleapis.com/fe-production/icon_vxr_full.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 nav-pills">

            <li className="nav-item  ">
              <Link to="/landing" className='nav-link' style={linkstyle2}
                // onClick={() => {
                //   toogleClickH(!isClickH);
                // }}
              >Trang Chủ</Link>
            </li>


            {/* {props.isLogin &&} */}
            {props.isLogin &&
              <li className="nav-item ">
                <Link to={`/users/${decode._id}`} className='nav-link' style={linkstyle2}
                  // onClick={() => {
                  //   toogleClickL(!isClickL);
                  // }}
                >Hồ Sơ</Link>
              </li>}

            {props.isLogin &&
              <li className="nav-item ">
                <Link to={`/users/${decode._id}/cart`} className="nav-link " style={linkstyle2} >
                  Lịch Sử Đặt Vé <FontAwesomeIcon icon={faArchive} size="lg" />
                </Link>
              </li>}

            {!props.isLogin && <li className="nav-item ">
              <Link to="/auth/Login" className="nav-link " style={linkstyle2}
              >Đăng Nhập</Link>
            </li>}

            {!props.isLogin && <li className="nav-item">
              <Link to="/users/CreateUser" className="nav-link " style={linkstyle2}
              >Đăng Ký</Link>
            </li>}

            {props.isLogin &&
              <li className="nav-item">
                <Link to="/" className="nav-link " style={linkstyle2}
                  onClick={() => {
                    props.logout();
                    props.setIsLogin(false);

                  }}
                >Đăng Xuất </Link>
              </li>}


          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Find Province"
              onChange={e => setContent(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              //to={`/booking/${content}`}
               onClick={e => onSubmit(e,props,content)}
            >
              Tìm
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLogin: state.layout.isLogin
  }
}

export default connect(mapStateToProps, {
  logout, setIsLogin
})(Navbar);

