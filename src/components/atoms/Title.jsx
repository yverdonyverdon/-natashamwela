import { Noto_Sans_Mono } from "@next/font/google";
import React from "react";
import styled from "styled-components";

const mono = Noto_Sans_Mono({ subsets: ["latin"] });
const Title = (props) => {
  const sub = props.sub ? props.sub : "Loren Ipsum";
  const desc = props.desc ? props.desc : null;
  return (
    <Conatiner>
      <Subtitle className={mono.className}>{sub}</Subtitle>
      <h2>{props.children}</h2>
      <Context>{desc}</Context>
    </Conatiner>
  );
};

export default Title;

const Conatiner = styled.div`
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
const Subtitle = styled.sub`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary700};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
const Context = styled.p`
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.7;
`;
