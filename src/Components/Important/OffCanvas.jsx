import React from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import Icon3 from "../../assets/images/svg/face.svg";
import Icon4 from "../../assets/images/svg/Frame.svg";
import CompanyName from "../../assets/images/svg/companyname.svg";

const OffCanvas = ({ isOpen, toggle, orderDetails, title }) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     console.log("Order Details:", orderDetails); 
  //     console.log("Order ID:", orderDetails?.orderID); 
  //   }
  // }, [isOpen, orderDetails]);

  return (
    <Offcanvas isOpen={isOpen} direction="end" toggle={toggle} id="offcanvasRight" className="border-bottom">
      <OffcanvasHeader toggle={toggle} id="offcanvasRightLabel">
        {title}
      </OffcanvasHeader>
      <div className="d-flex offCanvas-top border-top">
        <h6 className="customer-text">Customer Details</h6>
        <div className="icons">
          <img className="file-icon" src={Icon3} alt="Icon" />
          <img src={Icon4} alt="Icon" />
        </div>
      </div>

      <OffcanvasBody className="p-0 overflow-hidden">
        <SimpleBar style={{ height: "100vh" }}>
          <div className="acitivity-timeline p-3">
            <div className="company-info">
              <div className="d-flex">
              <img src={CompanyName} alt="Icon" />
              <div className='d-flex  company-name'>
                {orderDetails?.company?.name}
                
                <div className="action-section">
                  <button className="button accept">Accept</button>
                  <button className="button reject">Reject</button>
                </div>
                </div>
              </div>
              <div className="meta-tags mt-3 mb-5">
              <span className="manufacturing-text">Manufacturing &bull; Ludhiana, Punjab</span>
              <div>
                <span className="text-muted date">{orderDetails?.date }</span>
                <span className="text-muted time">{orderDetails?.time }</span>
                </div>
              </div>
            </div>
            <div className="about-section">
              <h4 className="mb-2">About</h4>
              <p className="menufacturing-text mb-3">
                {orderDetails?.about}
              </p>
              <div className="d-grid mb-4">
                <h6 className="title-text mb-1">Website</h6>
                <Link className="value" to={orderDetails?.website || '#'}>
                  {orderDetails?.website}
                </Link>
              </div>
              <div className="d-grid mb-4">
                <h6 className="title-text mb-1 ">Phone</h6>
                <span className="value">{orderDetails?.phone}</span>
              </div>
              <div className="d-grid mb-4">
                <h6 className="title-text mb-1">Industry</h6>
                <span className="detail-text">{orderDetails?.industry}</span>
              </div>
              <div className="d-grid mb-4">
                <h6 className="title-text mb-2">Locations (1)</h6>
                <h6 className="mb-3">Headquarters</h6>
                <p className="detail-text">
                  {orderDetails?.location}
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h5 className="title-text mt-3 mb-2">Note:</h5>
              <p className="detail-text ">
                {orderDetails?.note}
              </p>
            </div>
          </div>
        </SimpleBar>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default OffCanvas;
