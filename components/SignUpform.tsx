import React, { useState } from "react";
import styled from "styled-components";
import {
  ErrorMessage,
  FormCard,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "@/utils/utils";

// Update the styles to match the design in the image

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async () => {
    try {
      // Implement sign up logic, e.g., make a request to your authentication API
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Sign up successful, handle the response accordingly
      } else {
        // Sign up failed, handle the error
        const errorData = await response.json(); // Assuming error messages are in the response body
        setUsernameError(errorData.username); // Set the username error message
        setEmailError(errorData.email); // Set the email error message
        setPasswordError(errorData.password); // Set the password error message
      }
    } catch (error) {
      console.error("Sign up failed", error);
      setUsernameError("Sign up failed"); // Set a generic username error message
      setEmailError("Sign up failed"); // Set a generic email error message
      setPasswordError("Sign up failed"); // Set a generic password error message
    }
  };

  return (
    <StyledForm>
         <h2 className="formHeading">SignUp</h2>
      <FormCard>
        <StyledLabel htmlFor="username">Username:</StyledLabel>
        <StyledInput
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ErrorMessage>{usernameError}</ErrorMessage>
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
        <StyledButton type="button" onClick={handleSignUp}>
          Sign Up
        </StyledButton>
      </FormCard>
    </StyledForm>
  );
};

export default SignUpForm;
