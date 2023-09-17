import { Noto_Sans_Mono } from "@next/font/google";
import React from "react";
import styled from "styled-components";

const mono = Noto_Sans_Mono({ subsets: ["latin"] });
const KeyPerson = (props) => {
  return (
    <Container>
      <div>
        <h3 style={{ marginBottom: 0 }}>{props.info.name}</h3>
        <Sub className={mono.className}>{props.info.position}</Sub>
        <Context>
          {props.info.dep}
          <br />
          {props.info.dep2}
        </Context>
      </div>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.div`
  flex: 1;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Context = styled.p`
  font-size: 0.875rem;
`;
const Sub = styled.sub`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary700};
`;
