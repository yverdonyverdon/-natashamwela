import Link from "next/link";
import React from "react";
import styled from "styled-components";

const unCryptMailto = (s) => {
  let n = 0;
  let r = "";
  for (let i = 0; i < s.length; i++) {
    n = s.charCodeAt(i);
    if (n >= 8364) {
      n = 128;
    }
    r += String.fromCharCode(n - 1);
  }
  return r;
};
const linkToUnCryptMailto = (s) => {
  location.href = "mailto:" + unCryptMailto(s);
};
const EmailLink = ({ to }) => {
  return (
    <MailLink
      href="#"
      onClick={(e) => {
        linkToUnCryptMailto(to);
        e.preventDefault();
      }}
    >
      {unCryptMailto(to)}
    </MailLink>
  );
};

export default EmailLink;

const MailLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary700};
`;
