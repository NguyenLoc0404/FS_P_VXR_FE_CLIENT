import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
const footer = () => {
  return (
    <footer className="footer border-top fs-small">
      <div className="container">
        <div className="row py-md-5 py-3">
          <div className="col-xl-3 col-md-6 d-md-block d-none">
            <ul className="links">
              <li>
                <a href="/"  className="fw-medium">VeXeRe for Business</a>
              </li>
              <li>
                <a href="/"   className="fw-medium">Teach on VeXeRe</a>
              </li>
              <li>
                <a href="/"  >VeXeRe app</a>
              </li>
              <li>
                <a href="/"  >About us</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 d-md-block d-none">
            <ul className="links">
              <li>
                <a href="/" >Careers</a>
              </li>
              <li>
                <a href="/" >Blog</a>
              </li>
              <li>
                <a href="/" >Help and Support</a>
              </li>
              <li>
                <a href="/" >Affiliate</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 d-md-block d-none">
            <ul className="links">
              <li>
                <a href="/" >Sitemap</a>
              </li>
              <li>
                <a href="/" >Popular trips</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="dropdown show float-none float-xl-right">
              <a className="btn border-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faGlobe} size="lg" /> &nbsp; English
          </a>
              <div className="dropdown-menu fs-small" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/" >中文(繁體)</a>
                <a className="dropdown-item" href="/" >中文(简体)</a>
                <a className="dropdown-item" href="/" >Türkçe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright border-top pt-4 pb-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12 leftside pb-3">
              <img src="https://storage.googleapis.com/fe-production/icon_vxr_full.svg"  className="img-fluid pr-4" />
              <span>
                Copyright © 2020 CyberSoft, Inc.  <br />
                <div style={{ fontWeight: 'bold', fontSize: 15 }}>
                  Teacher: Phó Nghĩa Văn
                  Mentor : Nguyễn Mẫn
                Author : Nguyễn Lộc - FS08</div>
              </span>

            </div>
            <div className="col-md-6 col-sm-12 rightside">
              <ul className="links float-lg-right d-flex" style={{ paddingInlineStart: 0 }}>
                <li>
                  <a href="/" >
                    Terms
              </a>
                </li>
                <li>
                  <a href="/" >
                    Privacy Policy and Cookies
              </a>
                </li>
                <li>
                  <a href="/" >
                    Policy
              </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default footer;