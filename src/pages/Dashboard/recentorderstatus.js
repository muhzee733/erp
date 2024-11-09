import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";

const recentorders = [
    {
        id: 1,
        img: product1,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Pending",
    },
    {
        id: 2,
        img: product2,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },
    {
        id: 3,
        img: product1,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Pending",
    },
    {
        id: 4,
        img: product2,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },
    {
        id: 5,
        img: product2,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Pending",
    },
    {
        id: 6,
        img: product2,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },
    {
        id: 7,
        img: product1,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },
    {
        id: 8,
        img: product1,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },
    {
        id: 9,
        img: product1,
        product: "iPhone 13",
        price: "₦730,000.00",
        quantity: 1,
        date: "12 Sept 2022",
        status: "Completed",
    },

    
];
const getStatusClasses = (status) => {
    switch (status) {
        case 'Completed':
            return 'status-btn-completed';
        case 'Pending':
            return 'status-btn-pending'; 
        default:
            return 'status-btn-pending'; 
    }
};

const RecentOrderStatus = ({title}) => {
    return (
        <React.Fragment>
            <Col xl={12}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
                        <span className="returns-heading text-muted ">Returns</span>
                    </CardHeader>
                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table table-centered table-hover align-middle table-nowrap mb-0">
                                <tbody>
                                    {recentorders.map((item, key) => (
                                        <tr key={key} className='table-td'>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-shrink-0 me-2">
                                                        <img src={item.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h5 className="fs-14 my-1 fw-medium"><span className="text-reset">{item.product}</span></h5>
                                                        <span>{item.price}</span>x<span>{item.quantity}</span>
                                                    </div>
                                                </div>
                                            </td>
                                          
                                            <td>
                                                <p className="text-muted">{item.date}</p>
                                                <span className={getStatusClasses(item.status)}>{item.status}</span>
                                            </td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="align-items-center mt-4 pt-2 justify-content-between row text-center text-sm-start">
                            <div className="col-sm">
                                <div className="text-muted">Showing <span className="fw-semibold">5</span> of <span className="fw-semibold">25</span> Results
                                </div>
                            </div>
                            <div className="col-sm-auto mt-3 mt-sm-0">
                                <ul className="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                                    <li className="page-item disabled">
                                        <Link to="#" className="page-link">←</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">1</Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link to="#" className="page-link">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="#" className="page-link">→</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </CardBody>
                </Card>
            </Col>

        </React.Fragment>
    );
}

export default RecentOrderStatus