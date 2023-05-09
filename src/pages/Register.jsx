import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:8000/api/register", values)
        .then((response) => {
          const { data } = response;
          console.log(data.message);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <Helmet title="Register">
      <section className="reg-design">
        <Container className="reg-form w-50">
          <Row>
            <h3 className="text-center mt-5">Sign Up Now!</h3>
          </Row>
          <Row>
            <Col lg="9" md=" 6" sm="12" className="m-auto text-center">
              <form onSubmit={formik.handleSubmit} className="form">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    ref={registerNameRef}
                    {...formik.getFieldProps("name")}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={registerEmailRef}
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={registerPasswordRef}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="addTOCart__btn px-5 fs-6 fw-bold"
                >
                  Sign Up
                </button>
              </form>
              <div className="px-3 fs-5 my-5 ">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-warning fw-bold">Login here..</span>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};



export default Register;
