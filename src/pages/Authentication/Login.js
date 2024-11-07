import React, { useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Input, Row, Button, Form, FormFeedback, Alert, Spinner } from 'reactstrap';
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../Components/Common/withRouter";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

// actions
import { loginUser, resetLoginFlag } from "../../slices/thunks";

import { createSelector } from 'reselect';
//import images
import logoSm from "../../assets/images/logo-sm.png";


const Login = (props) => {
    const dispatch = useDispatch();

    const selectLayoutState = (state) => state;
    const loginpageData = createSelector(
        selectLayoutState,
        (state) => ({
            user: state.Account.user,
            error: state.Login.error,
            loading: state.Login.loading,
            errorMsg: state.Login.errorMsg,
        })
    );
    // Inside your component
    const {
        user, error, loading, errorMsg
    } = useSelector(loginpageData);

    const [userLogin, setUserLogin] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);


    useEffect(() => {
        if (user && user) {
            const updatedUserData = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? user.multiFactor.user.email : user.email;
            const updatedUserPassword = process.env.REACT_APP_DEFAULTAUTH === "firebase" ? "" : user.confirm_password;
            setUserLogin({
                email: updatedUserData,
                password: updatedUserPassword
            });
        }
    }, [user]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" ,
            password: userLogin.password || "123456",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            console.log('clicked', values)
            dispatch(loginUser(values, props.router.navigate));
        }
    });


    useEffect(() => {
        if (errorMsg) {
            setTimeout(() => {
                dispatch(resetLoginFlag());
            }, 3000);
        }
    }, [dispatch, errorMsg]);
    document.title = "Basic SignIn | Velzon - React Admin & Dashboard Template";
    return (
        <ParticlesAuth>
                <div className="auth-page-content mt-lg-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5}>
                            <Card className="mt-4">
                                <CardBody className="login">
                                    <div className='login-img text-center'>
                                    <span className="logo-sm">
                                    <img src={logoSm} alt="" />
                                </span>
                                    </div>

                                    <div className="text-center mt-2">
                                        <h5 className="text">Welcome Back!</h5>
                                        <p className="text-muted">Login to your account</p>
                                    </div>
                                    {error && error ? (<Alert color="danger"> {error} </Alert>) : null}
                                    <div className="p-2 mt-4">
                                        <Form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                validation.handleSubmit();
                                                return false;
                                            }}
                                            action="#">

                                            <div className="mb-3">
                                                <Input
                                                    name="email"
                                                    className="input-login"
                                                    placeholder="Email Address"
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
                                                    <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                ) : null}
                                            </div>

                                            <div className="mb-3">

                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <Input
                                                        name="password"
                                                        value={validation.values.password || ""}
                                                        type={passwordShow ? "text" : "password"}
                                                        className=" input-login pe-5"
                                                        placeholder="Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        invalid={
                                                            validation.touched.password && validation.errors.password ? true : false
                                                        }
                                                    />
                                                    <i class="icon-pass-login ri-git-repository-private-line"></i>

                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                    ) : null}
                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon" onClick={() => setPasswordShow(!passwordShow)}><i className="ri-eye-fill hidden-login"></i></button>
                                                </div>
                                                <div className="linked-text">
                                                    <Link to="/forgot-password" className="linked-text">Recover Password</Link>
                                                </div>
                                            </div>

                                            {/* <div className="form-check">
                                                <Input className="form-check-input" type="checkbox" value="" id="auth-remember-check" />
                                                <Label className="form-check-label" htmlFor="auth-remember-check">Remember me</Label>
                                            </div> */}

                                            <div className="mt-5 mb-5 text-center">
                                            <p className="account">Don't have an account ? <Link to="/register" className="linked-text"> Signup </Link> </p>
                                            </div>

                                            <div className="mt-4  text-center">
                                                <Button  disabled={error ? null : loading ? true : false} className="login-btn" type="submit">
                                                    {loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null}
                                                    Login
                                                </Button>
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

export default withRouter(Login);
