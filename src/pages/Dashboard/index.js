import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import WidgetDashboard from './widgetdashboard'
import Recentorders from '../Dashboard/recentorders'
import WidgetMarketing from '../Dashboard/widget-marketing'
import RecentOrderStatus from '../Dashboard/recentorderstatus'
import MarketingBarchart from './marketing-barchart'


export const Index = () => {
  return (
    <>
    <div className="page-content">
      <Row>
        <WidgetDashboard />
      
      </Row>
      <Row>
          <Col xl={7}>
          <Row>
              <Col xl={6}>
              <MarketingBarchart/>
              </Col>
              <Col xl={6}>
              <WidgetMarketing />
              </Col>
          </Row>
          <Row>
           <Col md={12}>
           <Recentorders title="Recent Orders" 
           orderId="ORDER ID" 
           vendor="VENDOR"
           status="STATUS"
           departure="DEPARTURE"
           weight="WEIGHT"
           arrival="ARRIVAL"
           arrivaldate="ARRIVALDATE"
           />

           </Col>
          </Row>
          </Col>
          <Col md={6}>
          <RecentOrderStatus title="Recent Orders" />
          </Col>

        </Row>
    </div>
    </>
  )
}

export default Index