/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import YouTube from './YouTube';

const History = ({ open }) => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <React.Fragment>
      <Container>
        <div className="wrapper">
          <div className="content">
            <p className="small-text">#UBAAfricaConversations</p>
            <h2 className="title">
              Be a part of <span>History</span>
            </h2>
            <p className="text-content">
              The UBA Africa Conversations, now in its fourth year, is a
              dialogue that promotes the good on the continent: the best of our
              history and strength of our resources both human and natural. The
              conversations encourage engagement and consciousness about all the
              positives we have to showcase to the world. We also foster
              discussions on how to get to the Africa we all dream of. A safe
              place where prosperity lives.
            </p>
            <p className="text-content">
              We look forward to hosting you at the UBA Africa Conversations
              2023
            </p>
            <div className="btn-row">
              <Button variant="contained" onClick={open}>
                Get started
              </Button>
              <Button variant="contained" href="/virtual-conference-room">
                Join conference
              </Button>
            </div>
          </div>
          <div className="img-container">
            <div className="img-wrapper">
              <img
                onClick={() => setOpenModal(true)}
                src="/img/web-history.png"
                alt="web-history"
              />
            </div>
          </div>
        </div>
      </Container>
      <React.Fragment>
        {openModal && (
          <YouTube
            open={openModal}
            close={() => setOpenModal(!openModal)}
            lang="hr"
          />
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default History;

const Container = styled('section')`
  padding: 3rem 1.5rem;
  margin-bottom: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.6)
      )
      0% 0%,
    url('/img/map-bg.png');
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 55fr 45fr;
    gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    .content {
      padding-top: 2rem;
      @media (max-width: 600px) {
        padding-top: 0;
      }
      .small-text {
        font-size: 1rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        color: #5a5a5a;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .title {
        font-size: 3rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 90%;
        margin: 1rem 0 2rem 0;
        color: #2a2a2a;
        max-width: 400px;
        span {
          background: linear-gradient(90deg, #5a5a5a 0%, #d70900 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 4rem;
          opacity: 1;
          display: block;
          line-height: 120%;
          @media (max-width: 600px) {
            font-size: 2.5rem;
          }
        }
        @media (max-width: 600px) {
          font-size: 1.75rem;
        }
      }
      .text-content {
        font-size: 1rem;
        line-height: 150%;
        font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #707070;
        max-width: 750px;
      }
      .btn-row {
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
        button {
          width: 100%;
          max-width: 10rem;
        }
        @media (max-width: 600px) {
          flex-direction: column;
          button {
            max-width: unset;
          }
        }
      }
    }
    .img-container {
      width: 100%;
      @media (max-width: 768px) {
        display: none;
      }
      .img-wrapper {
        width: 100%;
        img {
          margin-top: 2rem;
          max-width: 100%;
          max-height: 500px;
          transition: all ease-in-out 0.3s;
          cursor: pointer;
          &:hover {
            transform: scale(1.025);
          }
        }
      }
    }
  }
`;
