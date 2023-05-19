import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header1 from '../../components/Header1';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Typography } from '@mui/material';
import VoteModal from '../../components/VoteModal';

const Vote = () => {
  const [voter, setVoter] = useState({
    firstname: '',
    lastname: '',
    email: '',
    candidate_handle: '',
  });

  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState(null);

  const handleVoteModal = (e) => {
    e.preventDefault();
    if (voter.candidate_handle.trim('').length === 0) {
      setError('You muse select a candidate to continue');
    } else {
      setOpenModal(true);
    }
  };

  return (
    <React.Fragment>
      <Header1 />
      <Container>
        <div className="wrapper">
          <div className="content">
            <h3 className="title">
              <span>#ubainnovateafrica</span> Submissions
            </h3>
            <div className="form-container">
              <form autoComplete="off">
                <FormControl required fullWidth>
                  <FormLabel id="candidate">
                    Select your candidate of choice
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="candidate"
                    name="candidate"
                    value={voter.candidate_handle}
                    onChange={(e) => {
                      setVoter({ ...voter, candidate_handle: e.target.value });
                      if (error) setError(null);
                    }}
                  >
                    <FormControlLabel
                      value="instincts.illustrations"
                      control={<Radio />}
                      label="@instincts.illustrations"
                    />
                    <FormControlLabel
                      value="ideal_praise"
                      control={<Radio />}
                      label="@ideal_praise"
                    />
                    <FormControlLabel
                      value="robinho_art_world"
                      control={<Radio />}
                      label="@robinho_art_world"
                    />
                    <FormControlLabel
                      value="demigodkad"
                      control={<Radio />}
                      label="@demigodkad"
                    />
                    <FormControlLabel
                      value="nuel_arts"
                      control={<Radio />}
                      label="@nuel_arts"
                    />
                    <FormControlLabel
                      value="iduzeth"
                      control={<Radio />}
                      label="@iduzeth"
                    />
                    <FormControlLabel
                      value="drwasante"
                      control={<Radio />}
                      label="@drwasante"
                    />
                    <FormControlLabel
                      value="hopex_stararts"
                      control={<Radio />}
                      label="@hopex_stararts"
                    />
                    <FormControlLabel
                      value="mi.monte"
                      control={<Radio />}
                      label="@mi.monte"
                    />
                    <FormControlLabel
                      value="didii_gram"
                      control={<Radio />}
                      label="@didii_gram"
                    />
                  </RadioGroup>
                </FormControl>
                <>{error && <p className="voter-error">{error}</p>}</>
                <Button
                  variant="contained"
                  type="button"
                  onClick={handleVoteModal}
                >
                  submit
                </Button>
              </form>
            </div>
          </div>
        </div>
        <React.Fragment>
          {openModal && (
            <VoteModal
              open={openModal}
              close={() => setOpenModal(!openModal)}
              voter={voter}
              setVoter={setVoter}
            />
          )}
        </React.Fragment>
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
      }
      .form-container {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        padding: 1rem;
        max-width: 500px;
        margin: 1rem auto;
        border-radius: 0.25rem;
        button {
          margin-top: 1rem;
          width: 10rem;
        }
        .voter-error {
          font-size: 12px;
          color: #d70900;
          font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      }
    }
  }
`;
