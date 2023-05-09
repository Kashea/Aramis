import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import "../styles/register.css";



const Register = () => {

    const registerNameRef = useRef();
    const registerPasswordRef = useRef();
    const registerEmailRef = useRef()

    const submitHandler = e => {
        e.preventDefault()
    }

    return <Helmet title="Register">
        

        <section className="reg-design">
            <Container className="reg-form w-50">
                <Row>
                    <h3 className="text-center mt-5">Sign Up Now!</h3>
                </Row>
                <Row>
                    <Col lg='9' md=' 6' sm='12' className="m-auto text-center">
                        <form action="" className="form" onSubmit={submitHandler}>
                            <div className="form__group">
                                <input type="text" placeholder="First Name" required ref={registerNameRef}/>
                            </div>

                            <div className="form__group">
                                <input type="text" placeholder="Last Name" required ref={registerNameRef}/>
                            </div>
                            
                            <div className="form__group">
                                <input type="email" placeholder="Email" required ref={registerEmailRef}/>
                            </div>

                            <div className="form__group">
                                <input type="password" placeholder="Password" required ref={registerPasswordRef}/>
                            </div>
                        </form>
                        <button type='submit' className="addTOCart__btn px-5 fs-6 fw-bold">Sign Up</button>
                        <div className="px-3 fs-5 my-5 ">
                            <p>Already have an account? <Link to='/login'><span className="text-warning fw-bold">Login here..</span></Link></p>
                        
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Register;