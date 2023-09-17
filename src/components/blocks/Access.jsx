import { Noto_Sans_Mono } from "@next/font/google";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

import EmailLink from "@/components/atoms/EmailLink";
import Title from "@/components/atoms/Title";
import { baseInfo } from "@/const/base";

import Map from "../../../public/image/map.png";

const mono = Noto_Sans_Mono({ subsets: ["latin"] });
const Access = () => {
  return (
    <Container id="access">
      <Title sub="Access">찾아오시는 길</Title>
      <Grid>
        <div style={{ position: "relative" }}>
          <Image
            src={Map}
            alt="greta_access_map"
            size="100vw"
            auto="true"
            style={{
              height: "100%",
              width: "100%",
              marginBottom: "-30px",
              objectFit: "cover",
            }}
            placeholder="blur"
          />
          <span
            style={{
              fontSize: "10px",
              background: "#fff",
              color: `$({ theme }) => theme.color.neutral500`,
              padding: "0.5em 1em 0.5em",
            }}
          >
            Natasha Muluswela
          </span>
        </div>
        <Wrap>
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "700",
                marginBottom: "0.5em",
              }}
            >
              소재지 정보
            </div>
            <div>{baseInfo.address}</div>
          </div>
          <ContactCard>
            <ContactTitle className={mono.className}>Contact</ContactTitle>
            <div style={{ width: "100%" }}>
              <ContactWrap>
                <Image
                  src="/svg/phone_fill.svg"
                  alt="greta_tel"
                  width={36}
                  height={36}
                />
                {baseInfo.tel}
              </ContactWrap>
              <ContactWrap>
                <Image
                  src="/svg/mail_fill.svg"
                  alt="greta_mail"
                  width={36}
                  height={36}
                />
                <EmailLink to="hsfubAuif.hsfub/dpn" />
              </ContactWrap>
            </div>
          </ContactCard>
        </Wrap>
      </Grid>
    </Container>
  );
};

export default Access;

const Container = styled.div``;
const Grid = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoint.md`
    grid-template-columns: 3fr 2fr;
  `}
  gap: 1rem;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  color: ${({ theme }) => theme.colors.black};
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md`
    padding: 30px 0;
    `}
  padding: 30px 0 50px;
`;
const ContactTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary700};
  width: 80%;
  margin: 0 auto 0.5rem;
  font-weight: 700;
  font-size: 1.5rem;
`;
const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0 0.5rem;
`;
