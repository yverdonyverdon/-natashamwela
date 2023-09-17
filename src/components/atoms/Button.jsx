import { Noto_Sans_Mono } from "@next/font/google";
import React from "react";
import styled from "styled-components";

const mono = Noto_Sans_Mono({ subsets: ["latin"] });

const BaseButton = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  min-width: 100px;
  padding: 0.75rem 2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  transition: 0.2s;
  text-transform: capitalize;
  border: 1px solid transparent;
  border-radius: 100px;
  cursor: pointer;
`;
const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary500};
  :hover {
    background: ${({ theme }) => theme.colors.primary700};
  }
  :focus-visible {
    border: 1.5px solid ${({ theme }) => theme.colors.primary500};
  }
`;
const ButtonSecondary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.primary700};
  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary700};
    background: ${({ theme }) => theme.colors.primary700};
    color: ${({ theme }) => theme.colors.white};
  }
  :focus-visible {
    border: 2px solid ${({ theme }) => theme.colors.primary700};
  }
`;
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};
const Button = ({ styleType, onClick, children }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return (
    <Component onClick={onClick} className={mono.className}>
      {children}
    </Component>
  );
};

export default Button;
