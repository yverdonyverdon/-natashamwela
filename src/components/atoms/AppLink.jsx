import { Noto_Sans_Mono } from "@next/font/google";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const mono = Noto_Sans_Mono({ subsets: ["latin"] });

const BaseLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: 0.3s ease;
  text-transform: uppercase;
  :hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;
const DetaillLink = styled(BaseLink)`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary700};
  :after {
    content: "\\00a0›";
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
  }
  :hover {
    :after {
      transform: translateX(5px);
    }
  }
`;
const EmailLink = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  text-transform: none;
`;

const linkStylesLists = {
  default: BaseLink,
  detail: DetaillLink,
  email: EmailLink,
};

const AppLink = ({ styleType, href, target, children }) => {
  const targetTo = target || (href.startsWith("http") ? "_blank" : undefined);
  const Component = linkStylesLists[styleType] || linkStylesLists.default;
  return (
    <div className={mono.className}>
      <Component href={href} target={targetTo} scroll={false}>
        {children}
      </Component>
    </div>
  );
};

export default AppLink;
