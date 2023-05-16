/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import Modal from './Modal';
import panelists from './data/panelists';

const Panelists = ({ openRegModal }) => {
  const [item, setItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const openItem = (param, i) => {
    setItem(param);
    setOpenModal(true);
    sessionStorage.setItem('img', `/img/panelist${i + 1}.png`);
  };

  return (
    <React.Fragment>
      <Container>
        <div className="wrapper">
          <span className="small-text">meet the panelists</span>
          <h2 className="title">
            Connect with leading African voices leaving global footprints
          </h2>
          <Grid container spacing={3}>
            {panelists.map((panelist, i) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={panelist.id}>
                <div className="panelist" onClick={() => openItem(panelist, i)}>
                  <img src={`/img/panelist${i + 1}.png`} alt="panelist" />
                  <h3>{panelist.name}</h3>
                </div>
              </Grid>
            ))}
          </Grid>
          <div className="cta-wrapper">
            <Button onClick={openRegModal} variant="contained">
              Register now
            </Button>
          </div>
        </div>
      </Container>
      {openModal && (
        <Modal
          item={item}
          open={openModal}
          close={() => {
            setOpenModal(!openModal);
            sessionStorage.removeItem('img');
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Panelists;

const Container = styled('section')`
  background-image: url('/img/panelist-bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem 1.5rem;
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
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
      line-height: 100%;
      margin: 1rem 0 2rem 0;
      color: #2a2a2a;
      max-width: 600px;
    }
    .panelist {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      img {
        border-radius: 50%;
        max-width: 100%;
        max-height: 240px;
      }
      h3 {
        text-align: center;
        margin-top: 0.5rem;
        font-family: Encode Sans, 'Segoe UI', Tahoma, Geneva, Verdana,
          sans-serif;
      }
    }
    .cta-wrapper {
      margin-top: 3rem;
      display: grid;
      place-items: center;
    }
    @media (max-width: 600px) {
      .title {
        font-size: 1.75rem;
      }
      .panelist img {
        max-height: 200px;
      }
    }
  }
`;
