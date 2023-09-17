import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";
import Title from "@/components/atoms/Title";
import { pageInfo } from "@/const/services/artwork";

const Summary = () => {
  return (
    <Container>
      <Grid>
        <div style={{ gridArea: "title" }}>
          <Title sub="Artwork algorithm">{pageInfo.title}</Title>
        </div>
        <div />
        <When>
          <Title sub="When to use?" />
          <ul>
            {pageInfo.whenToUse.map((li, i) => (
              <li key={i} style={{ padding: "0 0 0.5rem" }}>
                {li}
              </li>
            ))}
          </ul>
        </When>
        <Desc>
          <Title sub="description" />
          <p style={{ maxWidth: "40rem" }}>{pageInfo.desc}</p>
          <AppLink
            href="https://www.kisdi.re.kr/report/view.do?key=m2101113025339&arrMasterId=4311435&masterId=4311435&artId=706876#none"
            styleType="detail"
          >
            관련 자료: 합성 데이터(Artwork)의 부상
          </AppLink>
        </Desc>
      </Grid>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  margin: 15% 0 5%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "desc"
    "when";
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  ${({ theme }) => theme.breakpoint.md`
    grid-template-areas:
      "title title . when when when"
      "desc desc desc desc desc desc";
    grid-template-columns: repeat(6, 1fr);
  `};
`;
const When = styled.div`
  grid-area: when;
`;
const Desc = styled.div`
  grid-area: desc;
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 0.5px solid ${({ theme }) => theme.colors.neutral500};
`;
