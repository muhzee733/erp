  import React, { useState } from "react";
  import "./customer.css";
  import { CardBody, Card, Container, Row, CardHeader } from "reactstrap";
  import { ReactComponent as Filter } from "../../assets/images/svg/Filter.svg";
  import { ReactComponent as Calendar } from "../../assets/images/svg/calendartable.svg";
  import BreadCrumb from "../../Components/Common/BreadCrumb";
  import VendorCard from "../../Components/Important/VendorCard";
  import { ReactComponent as PlusIcon } from "../../assets/images/svg/fi_plus.svg";
  import DataTable from "../../Components/Important/DataTable";
  import Search from "../../Components/Important/Search";
  import CustomModal from "../../Components/Important/CustomModal";

  const Customer = () => {
    const [modal_grid, setmodal_grid] = useState(false);

    const column = [
      "Vendor Name",
      "Email",
      "Phone",
      "Orders",
      "Order Total",
      "Vendor Since",
      "Status",
    ];
    const customers = [
      {
        id: 1,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 2,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 3,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 4,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 5,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 6,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 7,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 8,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 9,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
      {
        id: 10,
        vendorName: "Janet Adebayo",
        email: "janet.a@mail.com",
        phone: "+2348065650633",
        orders: 10,
        orderTotal: "₦250,000.00",
        vendorSince: "12 Aug 2022 - 12:25 am",
        status: "Active",
      },
    ];
    const toggleModal = () => {
      setmodal_grid(!modal_grid);
      // console.log(modal_grid,"modal");
    };


    return (
      <div className="page-content">
        <BreadCrumb icon="home" />
        <CustomModal isOpen={modal_grid} toggleModal={toggleModal} />
        <Container fluid>
          <Row>
            <div className="p-0 d-flex justify-content-between align-items-center mb-4">
              <h4 className="card-title" style={{ paddingLeft: "4px" }}>
                Vendor Summary
              </h4>
              <div className="card-header-action">
                <button
                  className="vendor-btn"
                  onClick={toggleModal}
                >
                  <PlusIcon />
                  Add New Vendor
                </button>
              </div>
            </div>
            <Row className="p-0 m-0" style={{ columnGap: "19px" }}>
              <VendorCard
                iconClass="ri-user-line"
                iconClass2="ri-shopping-bag-line"
              />
            </Row>
          </Row>
          <Row>
            <Card>
              <CardHeader className="align-items-center d-flex ">
                <h4 className="card-title mb-0 flex-grow-1">Customers</h4>
                <Search placeholder="Search" />
                <button
                  className="btn-filter"
                  style={{ marginLeft: "07px", marginRight: "07px" }}
                >
                  <Filter style={{ marginRight: "07px" }} />
                  Filter
                </button>
                <button className="btn-filter">
                  <Calendar style={{ marginRight: "07px" }} />
                  Filter
                </button>
              </CardHeader>
              <CardBody>
                <DataTable customerData={customers} column={column} />
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  };

  export default Customer;
