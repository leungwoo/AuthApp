import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <div className="password-input">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </div>
        </Form.Group>
      </Form>
      <Button type="submit" variant="primary" className="mt-3">
        Sign In
      </Button>
      <Row className="py-3">
        <Col>
          New Customer? <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
