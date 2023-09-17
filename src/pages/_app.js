import "@/styles/style.css";

import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GoogleAnalytics from "@/components/atoms/GoogleAnalytics";
import PageHead from "@/components/atoms/PageHead";
import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { navInfo } from "@/const/base";
import usePageView from "@/hooks/usePageView";
import { theme } from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
  usePageView();
  return (
    <>
      <GoogleAnalytics />
      <PageHead />
      <ThemeProvider theme={theme}>
        <div className={inter.className}>
          <div>
            <Header navigation={navInfo.header} />
            <Container>
              <Main>
                <AnimatePresence
                  mode="wait"
                  onExitComplete={() => window.scrollTo(0, 0)}
                >
                  <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
              </Main>
              <Footer navigation={navInfo.footer} />
            </Container>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 70px 3rem 250px;
`;
