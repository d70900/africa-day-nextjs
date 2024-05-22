/* eslint-disable react/no-unknown-property */

/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import Header1 from '../components/Header1';
import Panelists from '../components/Panelists';
import CatchUp from '../components/CatchUp';
import Signup from '../components/Signup';
import History from '../components/History';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home = () => {
  const [signupModal, setSignupModal] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>UBA Africa Day Conversations 2024 | UBA Group</title>
        <meta description="Join the UBA Africa Day 2024 Conversations With Leading African Leaders. Reserve Your Spot. Register for Free Online." />
      </Head>
      <Header1 />
      <Container>
        <div className="wrapper">
          <div className="main-content">
            <div className="top-content">
              <img
                src="/img/AFRICA DAY 2024.png"
                alt="africa-day-logo"
                draggable="false"
              />
              {/* <Link href="/virtual-conference-room">
                <a><button>Watch event</button></a>
              </Link> */}
            </div>
            <div className="text-content">
              <h2 className="title">
                Innovating the Continent
                <br /> for Growth
              </h2>
              <p className="subtext">
                As a leading pan-African bank, UBA is very focused on economic
                growth and prosperity on the African continent. We know that
                there is a great deal of potential yet untapped in Africa and we
                want to keep contributing to the development of our continent.
              </p>
            </div>
            <div className="cta">
              <Link href="#register" passHref>
                <a
                  className="cta-item-register"
                  // onClick={() => setSignupModal(true)}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    <p className="cta-text">Register</p>
                  </div>
                </a>
              </Link>
              {/* <Link href="/virtual-experience" passHref>
                <a>
                  <div className="cta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                      />
                    </svg>
                    <p className="cta-text">Virtual Experience</p>
                  </div>
                </a>
              </Link>
              <Link href="/web-experience" passHref>
                <a>
                  <div className="cta-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    <p className="cta-text">Web Experience</p>
                  </div>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="hero-img">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/FcP0Iszi9nw"
              title="UBA Africa Day"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
      {/* <Panelists openRegModal={() => setSignupModal(true)} /> */}
      <History open={() => setSignupModal(true)} />
      <CatchUp />
      <Footer />
      {signupModal && (
        <Signup open={signupModal} close={() => setSignupModal(!signupModal)} />
      )}
    </React.Fragment>
  );
};

export default Home;

const Container = styled('section')`
  padding: 3rem 1.5rem;
  background-image: url('/img/map-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* display: none; */
  @media (max-width: 768px) {
    padding: 1rem;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
    .main-content {
      .top-content {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 2rem;
        max-width: 650px;
        img {
          max-width: 220px;
        }
        button {
          all: unset;
          background-color: #d70900;
          color: #ffffff;
          padding: 1rem 1.5rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          border-radius: 1rem 1rem 1rem 0;
          transition: all ease-in-out 0.3s;
          cursor: pointer;
          &:hover {
            transform: scale(1.025);
          }
        }
        @media (max-width: 600px) {
          flex-direction: column;
          align-items: center;
          img {
            max-width: 100%;
          }
          button {
            margin: 1rem 0;
          }
        }
      }
      .text-content {
        max-width: 650px;
        background-color: #ffffff60;
        h2 {
          font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 90%;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #2a2a2a;
        }
        p {
          font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 300;
          font-size: 1.25rem;
          line-height: 125%;
        }
        @media (max-width: 600px) {
          h2 {
            font-size: 1.75rem;
            margin: 1rem 0;
          }
          p {
            font-size: 1rem;
          }
        }
      }
      .cta {
        display: flex;
        grid-gap: 1rem;
        margin: 2rem 0;
        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
        }
        a {
          padding: 1rem;
          border-radius: 0.5rem;
          min-width: 10rem;
          transition: all ease-in-out 0.3s;
          background-color: #ffffff90;
          &:hover {
            transform: scale(1.05);
          }
          @media (max-width: 600px) {
            padding: 1rem;
          }
          box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
          .cta-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            svg {
              color: #d70900;
              width: 4rem;
            }
            p {
              text-align: center;
              font-family: system-ui, -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
              color: #444444;
            }
            @media (max-width: 600px) {
              flex-direction: row;
              svg {
                width: 2rem;
              }
            }
          }
        }
        .cta-item-register {
          background-color: #d70900;
          div {
            display: flex;
            /* flex-direction: column; */
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            svg {
              color: #ffffff;
              width: 2rem;
            }
            p {
              text-align: center;
              font-family: system-ui, -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
              color: #ffffff;
            }
            @media (max-width: 600px) {
              flex-direction: row;
              svg {
                width: 2rem;
              }
            }
          }
        }
      }
    }
    .hero-img {
      width: 100%;
      img {
        width: 100%;
        border-radius: 0.5rem;
      }
    }
  }
`;
