import React from 'react';
import { Card, Row, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const WidgetDashboard = () => {
  return (
    <Row className='marketing-widgets'>
      {/* Sales and Volume Card */}
      <Col xl={12}>
        <Card className="folder-card">
          <CardBody>
            <div>
              <div className='icon-header'>
                <span className="folder-icon">
                  <i className=' ri-folder-reduce-line'></i>
                </span>
              </div>
              <div className='product-headings'>
                <p >All Products</p>
                <p >Active</p>
              </div>
              <div className='values-folder'>
                <h4>45</h4>
                <h4>32 <span >+24%</span></h4>
              </div>
            </div>
          </CardBody>  
        </Card>
      </Col>

      {/* Vendors Card */}
      <Col xl={12}>
        <Card className="card-animate">
          <CardBody>
            <div>
              <div className='shopping-card'>
                <span className="icon-2">
                  <i className="ri-shopping-cart-line"></i> 
                </span>
                <div className="flex-shrink-0">
                    <UncontrolledDropdown className="card-header-dropdown" >
                        <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                            <span className="text-muted">This Week<i className="ri-arrow-down-s-line"></i></span>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem>Download Report</DropdownItem>
                            <DropdownItem>Export</DropdownItem>
                            <DropdownItem>Import</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </div>
              </div>
              <div className='shopping-headings'>
                <p className='text-muted'>Abandoned Cart</p>
                <p className='text-muted'>Customers</p>
              </div>
              <div className='shopping-headings'>
                <h4>20% <span className="text">+0.00%</span></h4>
                <h4>30</h4>
              </div>
            </div>
          </CardBody>  
        </Card>
      </Col>

     
    </Row>
  );
};

export default WidgetDashboard;
