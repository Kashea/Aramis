import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";


const Login = () => {

    const loginNameRef = useRef();
    const loginPasswordRef = useRef();

    const submitHandler = e => {
        e.preventDefault()
    }

    return <Helmet title="Login">

        <section className="reg-design">
            <Container className="reg-form w-50">
                <Row>
                    <h3 className="text-center mt-5">Login Now!</h3>
                </Row>
                <Row>
                    <Col lg='9' md=' 6' sm='12' className="m-auto text-center">
                        <form action="" className="form" onSubmit={submitHandler}>
                            <div className="form__group">
                                <input type="email" placeholder="Email" required ref={loginNameRef}/>
                            </div>

                            <div className="form__group">
                                <input type="password" placeholder="Password" required ref={loginPasswordRef}/>
                            </div>
                        </form>
                        <button type='submit' className="addTOCart__btn px-5 fs-6 fw-bold">Login</button>
                        <div className="px-3 fs-5 my-5 ">
                            <p>No account yet? <Link to='/register'><span className="text-warning fw-bold">Click here..</span></Link></p>
                        
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Login;