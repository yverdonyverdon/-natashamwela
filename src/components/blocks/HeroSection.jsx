import React from "react";
import styled from "styled-components";

const HeroSection = (props) => {
  return (
    <Container>
      <MainImage src="/image/main.png" alt="greta_main" />
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  min-height: calc(50vh - 72px); /* Adjust the minus 72px based on your navbar height */
  overflow: hidden; /* Hide any content that overflows the container */
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
