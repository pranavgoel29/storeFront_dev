"use client";

import React from "react";
import {
  StyledContainer,
  StyledLeftSection,
  StyledRightSection,
} from "@/utils/utils";
import SignUpForm from "../../../components/SignUpform";

const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledLeftSection>
        <h1>StoreFront</h1>
      </StyledLeftSection>
      <StyledRightSection>
        <SignUpForm />
      </StyledRightSection>
    </StyledContainer>
  );
};

export default LoginPage;
