import styled from '@emotion/styled';
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import countries from './data/countries';
import axios from 'axios';

const Signup = (props) => {
  const { open, close } = props;

  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phone: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    const config = {
      url: 'https://uba-africa-day-backend.azurewebsites.net/api/applications',
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      data: data,
    };
    try {
      const response = await axios.request(config);
      if (!response.data.error) {
        setLoading(false);
        alert('Registration successful!');
        close();
      } else {
        setLoading(false);
        setError(
          'Unable to conplete registration at this time. Please try again later'
        );
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(
        'Unable to conplete registration at this time. Please try again later'
      );
    }
  };

  return (
    <Dialog fullWidth maxWidth={'sm'} open={open} onClose={close}>
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pr: 1,
        }}
      >
        <span style={{ fontFamily: 'Encode Sans, sans-serif' }}>Register</span>
        <IconButton
          size="small"
          onClick={close}
          sx={{ backgroundColor: '#7a7a7a20' }}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0 }}>
        <Register>
          <div className="wrapper">
            <div className="right-content">
              <div className="formWrapper">
                <h3 className="title">
                  Stay informed with our upcoming events
                </h3>
                <Box component="form" autoComplete="off" onSubmit={register}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        fullWidth
                        size="small"
                        onChange={(e) =>
                          setData({ ...data, firstname: e.target.value })
                        }
                        value={data.firstname}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        fullWidth
                        size="small"
                        onChange={(e) =>
                          setData({ ...data, lastname: e.target.value })
                        }
                        value={data.lastname}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email"
                        fullWidth
                        size="small"
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        value={data.email}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Autocomplete
                        disablePortal
                        id="country"
                        onChange={(e, value) => {
                          if (value) setData({ ...data, country: value.name });
                          if (!value) setData({ ...data, country: '' });
                        }}
                        options={countries.sort((a, b) =>
                          a.name.localeCompare(b.name)
                        )}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            required
                            label="Country"
                            size="small"
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Phone Number"
                        fullWidth
                        size="small"
                        onChange={(e) =>
                          setData({ ...data, phone: e.target.value })
                        }
                        value={data.phone}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <span className="disclaimer">
                        By submitting, you agree that UBA Group and its
                        affiliates may send you communications
                      </span>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="button-row">
                        <Button
                          variant="contained"
                          fullWidth
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress size="1.25rem" />
                          ) : (
                            'Submit'
                          )}
                        </Button>
                        <Button
                          variant="outlined"
                          fullWidth
                          type="button"
                          onClick={close}
                          disabled={loading}
                        >
                          close
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
          </div>
        </Register>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;

const Register = styled('section')`
  padding: 2rem 1rem;
  /* background-image: url('/img/reserve-bg.png'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: fixed;
  background-color: #fafafa;
  .wrapper {
    margin: 0 auto;
    .right-content {
      .formWrapper {
        margin-top: 2rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        margin: 0 auto;
        .subtext {
          font-size: 1rem;
          font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-transform: uppercase;
          color: #5a5a5a;
          font-weight: 700;
          letter-spacing: 1px;
          margin: 1rem 0;
        }
        .title {
          font-size: 2rem;
          font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 90%;
          margin: 1rem 0 2rem 0;
          color: #2a2a2a;
          max-width: 400px;
          @media (max-width: 600px) {
            font-size: 1.75rem;
          }
        }
        .disclaimer {
          font-size: 0.75rem;
          font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
            'Helvetica Neue', sans-serif;
          font-weight: 300;
          line-height: 100%;
        }
        .button-row {
          display: flex;
          gap: 1.5rem;
        }
      }
    }
  }
`;
