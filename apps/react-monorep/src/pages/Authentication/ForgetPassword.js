import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../slices/thunks";

// import images
// import profile from "../../assets/images/bg.png";
import logoSm from "../../assets/images/logo-sm.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { createSelector } from "reselect";

const ForgetPasswordPage = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });


  const selectLayoutState = (state) => state.ForgetPassword;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (state) => ({
      forgetError: state.forgetError,
      forgetSuccessMsg: state.forgetSuccessMsg,
    })
  );
  // Inside your component
  const {
    forgetError, forgetSuccessMsg
  } = useSelector(selectLayoutProperties);

  document.title = "Reset Password | Velzon - React Admin & Dashboard Template";
  return (
    <ParticlesAuth>
      <div className="auth-page-content mt-lg-5">

      <Container>

        <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
        <Card className="mt-4">

          <CardBody className="forget-password">
          <div className='login-img text-center'>
            <span className="logo-sm">
            <img src={logoSm} alt="" />
            </span>
          </div>
            <div className="text-center mt-2">
              <h5 className="text">Forgot Password?</h5>
              <p className="text-muted">Reset Password</p>

              <lord-icon
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="loop"
                colors="primary:#F23514"
                className="avatar-xl"
                style={{ width: "120px", height: "120px" }}
              >
              </lord-icon>

            </div>

            <Alert className="border-0 alert-warning text-center mb-2 mx-2" role="alert">
              Enter your email and instructions will be sent to you!
            </Alert>
            <div className="p-2">
              {forgetError && forgetError ? (
                <Alert color="danger" style={{ marginTop: "13px" }}>
                  {forgetError}
                </Alert>
              ) : null}
              {forgetSuccessMsg ? (
                <Alert color="success" style={{ marginTop: "13px" }}>
                  {forgetSuccessMsg}
                </Alert>
              ) : null}
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="mt-4 mb-4">
                  {/* <Label className="form-label">Email</Label> */}
                  <Input
                    name="email"
                    className="input-reset"
                    placeholder="Enter email"
                    type="email"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                    invalid={
                      validation.touched.email && validation.errors.email ? true : false
                    }
                  />
                  < i class="icon-user ri-mail-line"></i>

                  {validation.touched.email && validation.errors.email ? (
                    <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                  ) : null}
                </div>

                <div className="mt-5 mb-5 text-center">
                <p className="account">Remembered it? Try logging in again. <Link to="/login" className="linked-text"> Login </Link> </p>
                </div>


                <div className="text-center mt-4">
                  <button className="reset-btn" type="submit">Send Reset Link</button>
                </div>
              </Form>
            </div>
          </CardBody>
        </Card>


        </Col>
        </Row>
        </Container>
      </div>
    </ParticlesAuth>
  );
};

ForgetPasswordPage.propTypes = {
  history: PropTypes.object,
};

export default withRouter(ForgetPasswordPage);
