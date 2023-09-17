import React from "react";
import styled from "styled-components";

import TechCard from "@/components/atoms/TechCard";
import Title from "@/components/atoms/Title";
import { techsInfo } from "@/const/services/artwork";

const Techs = () => {
  return (
    <Container>
      <Grid>
        <div>
          <Title sub="Techs">{techsInfo.title}</Title>
        </div>
        <GridContent>
          {techsInfo.techs.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </GridContent>
      </Grid>
    </Container>
  );
};

export default Techs;
const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;
const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.breakpoint.sm`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `}
  gap: 1rem;
`;
