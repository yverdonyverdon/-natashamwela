import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";
import ServiceCard from "@/components/blocks/ServiceCard";

const Services = (props) => {
  return (
    <Container id="services">
      <Title sub="Services">What We Do?</Title>
      <Wrap row={props.services.length}>
        {props.services.map((service, i) => (
          <ServiceCard
            key={i}
            name={service.name}
            desc={service.desc}
            href={service.href}
            src={service.src}
          />
        ))}
      </Wrap>
    </Container>
  );
};

export default Services;

const Container = styled.div``;
const Wrap = styled.div`
  display: grid;
  grid-template-rows: repeat({props=> {props.row}}, 1fr);
`;
