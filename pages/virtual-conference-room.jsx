import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import Header1 from '../components/Header1';
import { Button } from '@mui/material';
import YouTube from '../components/YouTube';
import Head from 'next/head';

const ConferenceRoom = () => {
  const [openModal, setOpenModal] = useState(false);
  const [param, setParam] = useState('en');

  return (
    <Fragment>
      <Head>
        <title>Africa Day 2023 - Virtual Conference | UBA Group</title>
        <meta description="Join the UBA Africa Day 2023 Conversations virtual conference with leading African leaders." />
      </Head>
      <Header1 />
      <Container>
        <div className="wrapper">
          <div className="element-wrapper">
            <div className="options">
              <h3 className="title">Select Language</h3>
              <div className="btn-row">
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<PlayIcon />}
                  onClick={() => {
                    setParam('https://www.youtube.com/embed/paBgzFtcSaI');
                    setOpenModal(true);
                  }}
                >
                  English
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<PlayIcon />}
                  onClick={() => {
                    setParam('https://www.youtube.com/embed/4NiCm8VgYlU');
                    setOpenModal(true);
                  }}
                >
                  French
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Fragment>
        {openModal && (
          <YouTube
            open={openModal}
            close={() => setOpenModal(!openModal)}
            param={param}
          />
        )}
      </Fragment>
    </Fragment>
  );
};

export default ConferenceRoom;

const Container = styled('section')`
  min-height: calc(100vh - 97px);
  padding: 1rem;
  background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.6)
      )
      0% 0%,
    url('/img/conference-room-bg.png');
  background-position: center center;
  background-size: cover;
  .wrapper {
    min-height: calc(100vh - 97px);
    display: grid;
    place-items: center;
    .element-wrapper {
      width: 100%;
      .image-wrapper {
        background-color: #d70900;
        width: 6rem;
        aspect-ratio: 1;
        display: grid;
        place-items: center;
        border-radius: 15%;
        cursor: pointer;
        transition: all ease-in-out 0.3s;
        &:hover {
          transform: scale(1.05);
        }
        svg {
          width: 3rem;
          color: #ffffff;
        }
      }
      .options {
        .title {
          font-family: Encode Sans, 'Segoe UI', Tahoma, Geneva, Verdana,
            sans-serif;
          color: #5a5a5a;
        }
        background-color: #fafafa;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        .btn-row {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
          transition: all ease-in-out 0.2s;
          @media (max-width: 600px) {
            flex-direction: column;
          }
        }
      }
    }
  }
`;

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
    style={{ width: '2rem' }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
    />
  </svg>
);
