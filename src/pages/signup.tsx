import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebase";

const SignUp = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = name === "" || password === "" || email === "";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result: any) =>
        result.user
          .updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error: any) => {
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
            <Form.Text>
              Already a user?{" "}
              <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
