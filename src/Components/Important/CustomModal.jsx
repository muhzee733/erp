import { size } from "lodash";
import React from "react";
import { Button, Col, Input, Modal, ModalBody, ModalHeader } from "reactstrap";

const CustomModal = ({ isOpen, toggleModal }) => {
  const toggleFields = () => {
    const fields = document.getElementById("address-fields");
    fields.style.display = fields.style.display === "none" ? "block" : "none";
  };
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          <p className="modal-title mb-3">Add a New Customer</p>
          <p className="customer-text">Customer Information</p>
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="row g-3">
              <Col xxl={6}>
                <div>
                  <Input
                    className="input-form mb-2"
                    type="text"
                    id="customerName"
                    placeholder="Customer Name"
                  />
                </div>
              </Col>
              <Col xxl={6}>
                <div>
                  <Input
                    className="input-form mb-2"
                    type="email"
                    id="emailInput"
                    placeholder="Customer Email"
                  />
                </div>
              </Col>
              <div class="d-flex mb-2">
                <select className="input-form" style={{ marginRight: "10px" }}>
                  <option value="+234">🇳🇬 +234</option>
                  <option value="+1">🇺🇸 +1</option>
                </select>

                <Input
                  type="text"
                  placeholder="8023456789"
                  className="input-form"
                />
              </div>

              <div class="address-toggle">
                <label className="add-address" style={{ marginRight: "10px" , color:'#2B2F32' }}>
                  Add Address
                </label>
                <label class="switch">
                  <Input type="checkbox" />
                  <span class="slider round" onClick={toggleFields}></span>
                </label>
              </div>
              <div
                id="address-fields"
                style={{ display: "none", marginTop: "20px" }}
              >
                <Input
                  type="text"
                  placeholder="Building No., Street Address"
                  className="input-form mb-4"
                />
                <Input
                  type="text"
                  placeholder="City"
                  className="input-form mb-4"
                />

                <select
                  class="input-form mb-3"
                  style={{ marginRight: "09px", width: "49%" }}
                >
                  <option value="">Country</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                <select class="input-form mb-3" style={{ width: "49%" }}>
                  <option value="">State</option>
                  <option value="ny">New York</option>
                  <option value="ca">California</option>
                </select>
                <div class="d-flex">
                  <label
                    className="add-address d-flex"
                    style={{ marginRight: "10px" }}
                  >
                    Billing Address
                    <p style={{ marginLeft: "10px" , fontSize:"13px" }}>
                      Same as Customer Address
                    </p>
                  </label>
                  <label class="switch">
                    <Input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <div className="hstack gap-2 justify-content-center">
                  <Button className="cancel-btn" onClick={toggleModal}>
                    Cancel
                  </Button>
                  <Button className="add-btn" color="primary">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomModal;
