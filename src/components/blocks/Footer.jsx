import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

import gretaLogo from "../../../public/image/LOGO_GOLD_FULL.png";

const Footer = (props) => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Image
            src={gretaLogo}
            alt="Greta Logo"
            width={120}
            height={45}
            unoptimized={true}
            priority
          />
        </Link>
        <NavSection>
          {props.navigation.map((nav, i) => (
            <AppLink key={i} href={nav.href}>
              {nav.name}
            </AppLink>
          ))}
        </NavSection>
      </Nav>
      <Wrap>
        <Copyright>© GRETA Inc. — All rights reserved</Copyright>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.neutral300};
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.75rem;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${({ theme }) => theme.breakpoint.sm`
    flex-direction: row;
    align-items: center;
  `}
  justify-content: space-between;
  padding: 2.5rem 2rem 2.5rem;
  margin: auto;
  height: 100%;
  max-width: 1024px;
`;
const NavSection = styled.div`
  display: flex;
  gap: 2rem;
  ${({ theme }) => theme.breakpoint.sm`
    justify-content: end;
  `}
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.sm`
    flex-direction: row;
  `}
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border-top: 0.5px solid ${({ theme }) => theme.colors.neutral500};
  opacity: 0.7;
`;
const Copyright = styled.span``;
