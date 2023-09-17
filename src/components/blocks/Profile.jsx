import React from "react";
import styled from "styled-components";

import EmailLink from "@/components/atoms/EmailLink";
import Title from "@/components/atoms/Title";
import { baseInfo } from "@/const/base";

const Profile = (props) => {
  return (
    <Container id="profile">
      <Title sub={props.profileInfo.subtitle} desc={props.profileInfo.desc}>
        {props.profileInfo.title}
      </Title>
      <Table style={{ overflow: "scroll" }}>
        <tbody>
          <tr>
            <Th>회사명</Th>
            <Td>{baseInfo.nameKr}</Td>
          </tr>
          <tr>
            <Th>공동대표</Th>
            <Td>{baseInfo.founders}</Td>
          </tr>
          <tr>
            <Th>설립일</Th>
            <Td>{baseInfo.compAnniversary}</Td>
          </tr>
          <tr>
            <Th>연락처</Th>
            <Td>
              {baseInfo.tel}
            </Td>
          </tr>
          <tr>
            <Th>E-mail</Th>
            <Td>
              <EmailLink to={baseInfo.email} />
            </Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: grid;
  ${({ theme }) => theme.breakpoint.md`
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  `}
`;
const Table = styled.table`
  ${({ theme }) => theme.breakpoint.md`
    margin-top: 2.5rem;
  `}
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;
const Th = styled.th`
  padding: 1.5em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
  font-weight: 700;
  width: 30%;
  vertical-align: top;
`;
const Td = styled.td`
  padding: 1.5em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
  width: 75%;
`;
