import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Access from "@/components/blocks/Access";
import Founders from "@/components/blocks/Founders";
import HeroSection from "@/components/blocks/HeroSection";
import Profile from "@/components/blocks/Profile";
import Services from "@/components/blocks/Services";
import { foundersInfo, profileInfo, servicesInfo, slogan } from "@/const/about";

const index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <HeroSection hero={slogan}>{slogan.desc}</HeroSection>
        <Hr />
        <Wrap>
          <div />
          <Services services={servicesInfo} />
          <Bg>
            <Profile profileInfo={profileInfo} />
            <div />
            <Founders information={foundersInfo} />
          </Bg>
          <Access />
          <div />
        </Wrap>
      </Container>
    </motion.div>
  );
};

export default index;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 1024px;
  margin: 0 auto;
`;
const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral500};
`;
const Bg = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  margin: 0 calc(50% - 50vw);
  padding: 120px calc(50vw - 50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
