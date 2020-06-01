import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleUp
} from '@fortawesome/free-solid-svg-icons';
class info extends Component {
  render() {
    return (
      <section className="intro d-none d-md-block text-white">
        <div className="container intro-list">
          <div className="row">
            <div className="col-xl-4 col-md-4 d-flex justify-content-start align-items-center text-center text-lg-left">
              <FontAwesomeIcon icon={faChevronCircleUp} className="fs-extra mr-2 d-none d-lg-block" size="3x" />
              <div>
                <p className="fw-medium mb-0">100,000 Vé bán ra mỗi ngày </p>
                <span className="fw-light">Bằng giá tại quầy *</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 d-flex justify-content-start align-items-center text-center text-lg-left">
              <FontAwesomeIcon icon={faChevronCircleUp} className="fs-extra mr-2 d-none d-lg-block" size="3x" />
              <div>
                <p className="fw-medium mb-0">100,000 Giao Dich Online</p>
                <span className="fw-light">Không Phí Quản Trị</span>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 d-flex justify-content-start align-items-center text-center text-lg-left">
              <FontAwesomeIcon icon={faChevronCircleUp} className="fs-extra mr-2 d-none d-lg-block" size="3x" />
              <div>
                <p className="fw-medium mb-0">100,000 Mã Giảm Giá</p>
                <span className="fw-light">Hot Sale 10%-30% Mỗi Ngày</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default info;