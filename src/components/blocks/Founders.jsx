import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";
import KeyPerson from "@/components/blocks/KeyPerson";

const Founders = (props) => {
  return (
    <Container>
      <Title sub="Founders">공동대표</Title>
      <Wrap>
        {props.information.map((info, i) => (
          <KeyPerson key={i} info={info} />
        ))}
      </Wrap>
    </Container>
  );
};

export default Founders;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md`
    flex-direction: row;
  `}
  gap: 1rem;
`;
