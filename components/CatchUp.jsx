/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const CatchUp = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="left-content">
          <span className="small-text">Recent Events</span>
          <h2 className="title">Catch up on previous events</h2>
        </div>
        <div className="previous-events">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <div className="event-item">
                <div className="event-image">
                  <img src="/img/recent-event-2020.png" alt="recent-event" />
                </div>
                <p className="event-title">Africa Day 2022</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="event-item">
                <div className="event-image">
                  <img src="/img/recent-event-2020.png" alt="recent-event" />
                </div>
                <p className="event-title">Africa Day 2021</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="event-item">
                <div className="event-image">
                  <img src="/img/recent-event-2020.png" alt="recent-event" />
                </div>
                <p className="event-title">Africa Day 2020</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className="event-item">
                <div className="event-image">
                  <img src="/img/recent-event-2020.png" alt="recent-event" />
                </div>
                <p className="event-title">Africa Day 2019</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default CatchUp;

const Container = styled('section')`
  background-color: #ffffff;
  padding: 3rem 1.5rem;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: grid;
    .left-content {
      .small-text {
        font-size: 1rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        color: #5a5a5a;
        font-weight: 700;
      }
      .title {
        font-size: 3rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 90%;
        margin: 1rem 0 2rem 0;
        color: #2a2a2a;
        max-width: 400px;
        @media (max-width: 600px) {
          font-size: 1.75rem;
        }
      }
    }
    .previous-events {
      .event-item {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        border-radius: 0.5rem;
        overflow: hidden;
        transition: all ease-in-out 0.3s;
        cursor: pointer;
        @media (max-width: 600px) {
          max-width: 300px;
          margin: 0 auto;
        }
        &:hover {
          transform: scale(1.025);
        }
        .event-image {
          max-width: 400px;
          img {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
            object-position: center center;
          }
        }
        .event-title {
          font-size: 1.125rem;
          font-weight: 500;
          font-family: Encode Sans, 'Segoe UI', Tahoma, Geneva, Verdana,
            sans-serif;
          text-align: center;
          padding: 0.75rem;
          color: #7a7a7a;
        }
      }
    }
  }
`;
