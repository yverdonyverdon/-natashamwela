import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

import gretaLogoGold from "../../../public/image/LOGO_GOLD.png";

const Header = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <Container>
      <Nav>
        <Logo href="/">
          <Image
            src={gretaLogoGold}
            alt="Greta Logo"
            width={120}
            height={30}
            unoptimized={true}
            priority
          />
        </Logo>
        <NavSection toggleMenu={toggleMenu}>
          {props.navigation.map((nav, i) => (
            <AppLink key={i} href={nav.href}>
              {nav.name}
            </AppLink>
          ))}
        </NavSection>
        <ToggelButton onClick={() => handleMenu()}>
          <Image src="/svg/menu.svg" alt="menu" width={24} height={24} />
        </ToggelButton>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zindex.header};
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;
const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 70px;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.sm`
    flex-direction: row;
    align-items: center;
  `}
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 2rem;
  margin: auto;
  height: 100%;
  max-width: 1200px;
`;
const NavSection = styled.section`
  display: ${(props) => (props.toggleMenu ? "flex" : "none")};
  width: 100%;
  margin: 0 calc(50% - 50vw);
  padding: 2rem calc(50vw - 50%);
  flex-direction: column;
  gap: 2rem;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease;
  ${({ theme }) => theme.breakpoint.sm`
    display: flex;
    width: fit-content;
    margin: 0;
    padding: 0;
    flex-direction: row;
    gap: 3rem;
    background: transparent;
    border-bottom: none;
    box-shadow: none;
  `}
`;
const ToggelButton = styled.button`
  position: absolute;
  top: 25px;
  right: 30px;
  background: none;
  border: none;
  cursor: pointer;
  ${({ theme }) => theme.breakpoint.sm`
    display: none;
  `}
`;
