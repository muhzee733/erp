import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';


const recentOrders = [
    {
        id: 1,
        orderId: "ORDERID01",
        vendor: "Raj Industries",
        status: "Delivered",
        departure: "Delhi",
        weight: "250KG",
        arrival: "Mumbai",
        arrivaldate: "17 July 2024",
    },
    {
        id: 2,
        orderId: "ORDERID01",
        vendor: "Raj Industries",
        status: "Active",
        departure: "Delhi",
        weight: "250KG",
        arrival: "Mumbai",
        arrivaldate: "17 July 2024",
    },
    {
        id: 3,
        orderId: "ORDERID01",
        vendor: "Raj Industries",
        status: "Cancelled",
        departure: "Delhi",
        weight: "250KG",
        arrival: "Mumbai",
        arrivaldate: "17 July 2024",
    },
    {
        id: 4,
        orderId: "ORDERID01",
        vendor: "Raj Industries",
        status: "Delivered",
        departure: "Delhi",
        weight: "250KG",
        arrival: "Mumbai",
        arrivaldate: "17 July 2024",
    },
    {
        id: 5,
        orderId: "ORDERID01",
        vendor: "Raj Industries",
        status: "Delivered",
        departure: "Delhi",
        weight: "250KG",
        arrival: "Mumbai",
        arrivaldate: "17 July 2024",
    },
];

const getStatusClasses = (status) => {
    switch (status) {
        case 'Delivered':
            return 'status-btn-success'; 
        case 'Active':
            return 'status-btn-active'; 
        case 'Cancelled':
            return 'status-btn-cancelled'; 
        default:
            return 'status-btn-success'; 
    }
};

const RecentOrders = ({ title , vendor,customer,departure , status ,orderId,arrival,weight,arrivaldate}) => {
  return (
    <React.Fragment>
    <Col >
        <Card>
            <CardHeader className="align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
                <div className="flex-shrink-0">
                    <button type="button" className="btn view-all">
                        View All</button>
                </div>
            </CardHeader>

            <CardBody>
                <div className="table-responsive table-card">
                    <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                        <thead className="text-muted">
                            <tr>
                                <th scope="col">{orderId}</th>
                                <th scope="col">{status}</th>
                                <th scope="col">{vendor}{customer}</th>
                                <th scope="col">{departure}</th>
                                <th scope="col">{weight}</th>
                                <th scope="col">{arrival}</th>
                                <th scope="col">{arrivaldate}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(recentOrders || []).map((item, key) => (<tr key={key}>
                                <td>
                                    <Link to="/apps-ecommerce-order-details" className="order-id ">{item.orderId}</Link>
                                </td>
                                <td>
                                    <span className={getStatusClasses(item.status)}>{item.status}</span>
                                </td>
                                
                                <td>{item.vendor}</td>
                                <td>
                                    <span >{item.departure}</span>
                                </td>
                                <td>{item.weight}</td>
                                <td>
                                    <span>{item.arrival}</span>
                                </td>
                                <td>
                                    <span >{item.arrivaldate}</span>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    </Col>
</React.Fragment>
  )
}

export default RecentOrders