import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import { FirebaseContext } from "../context/firebase";

const SignIn = () => {
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || email === "";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        navigate(ROUTES.BROWSE);
      })
      .catch((error: any) => {
        if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/internal-error"
        ) {
          setError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        } else {
          setError("Something went wrong");
        }
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
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
            <Form.Submit disabled={isInvalid}>Sign In</Form.Submit>
            <Form.Text>
              New to Netflix?{" "}
              <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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

export default SignIn;
