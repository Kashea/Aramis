import React, { useRef } from "react";
import { useHistory, Link } from "react-router-dom";


import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function Login() {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          const { data } = response;
          console.log(data.token);
          // Redirect the user to a different page after login
          history.push("/dashboard");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <Helmet title="Login">
      <section className="reg-design">
        <Container className="reg-form w-50">
          <Row>
            <h3 className="text-center mt-5">Login Now!</h3>
          </Row>
          <Row>
            <Col lg="9" md=" 6" sm="12" className="m-auto text-center">
              <form onSubmit={formik.handleSubmit} className="form">
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
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
                    ref={loginPasswordRef}
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>

                <button type="submit" className="addTOCart__btn px-5 fs-6 fw-bold">
                  Login
                </button>
              </form>
              <div className="px-3 fs-5 my-5 ">
                <p>
                  No account yet?{" "}
                  <Link to="/register">
                    <span className="text-warning fw-bold">Click here..</span>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
