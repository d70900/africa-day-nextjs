import React from 'react';
import styled from '@emotion/styled';
import Header1 from '../../components/Header1';
import Head from 'next/head';

const Vote = () => {
  return (
    <React.Fragment>
      <Head>
        <title>UBA Africa Day Conversations 2024 | UBA Group</title>
        <meta description="UBA Africa Day Competition 2024 - Innovate Africa" />
      </Head>
      <Header1 />
      <Container>
        <div className="wrapper">
          <div className="content">
            <h3 className="title">
              <span>#ubainnovateafrica</span> Submissions
            </h3>
            <div className="form-container">
              <p className="message">
                Voting has ended! <br />
                Thank you for participating
              </p>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Vote;

const Container = styled('section')`
  padding: 3rem 1.5rem;
  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    .content {
      .title {
        font-size: 1.75rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-align: center;
        color: #5a5a5a;
        span {
          text-transform: uppercase;
        }
        @media (max-width: 600px) {
          font-size: 1.25rem;
        }
      }
      .form-container {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        padding: 2rem;
        max-width: 500px;
        margin: 1rem auto;
        border-radius: 0.25rem;
        @media (max-width: 600px) {
          padding: 1.5rem 1rem;
        }
        .message {
          text-align: center;
          font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      }
    }
  }
`;
