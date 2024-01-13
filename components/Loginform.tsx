import {
  ErrorMessage,
  FormCard,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "@/utils/utils";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    try {
      // Implement login logic, e.g., make a request to your authentication API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Authentication successful, handle the response accordingly
      } else {
        // Authentication failed, handle the error
        const errorData = await response.json(); // Assuming error messages are in the response body
        setEmailError(errorData.email); // Set the email error message
        setPasswordError(errorData.password); // Set the password error message
      }
    } catch (error) {
      console.error("Login failed", error);
      setEmailError("Login failed"); // Set a generic email error message
      setPasswordError("Login failed"); // Set a generic password error message
    }
  };

  return (
    <StyledForm>
      <h2 className="formHeading">Login</h2>
      <FormCard>
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorMessage>{emailError}</ErrorMessage>
        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorMessage>{passwordError}</ErrorMessage>
        <StyledButton type="button" onClick={handleLogin}>
          Login
        </StyledButton>
      </FormCard>
    </StyledForm>
  );
};

export default LoginForm;
