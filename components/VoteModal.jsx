import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Slide,
  TextField,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VoteModal = ({ open, close, voter, setVoter }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const config = {
      url: 'https://uba-africa-day-backend.azurewebsites.net/api/vote',
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      data: voter,
    };
    try {
      const response = await axios.request(config);
      if (response.data.status === 1) {
        toast.success(response.data.message);
        setVoter({
          firstname: '',
          lastname: '',
          email: '',
          candidate_handle: '',
        });
        setLoading(false);
        close();
      } else {
        toast.error('Temporary error: please try again after some time.');
        setLoading(false);
      }
    } catch (error) {
      // console.log(error);
      setLoading(false);
      if (error.response.data.message.toLowerCase().includes('duplicate')) {
        toast.error('Duplicate email entries not allowed');
      } else {
        toast.error('Server error: please try again later');
      }
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth={'sm'}
      open={open}
      onClose={() => null}
      TransitionComponent={Transition}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pr: 1,
        }}
      >
        <span style={{ fontFamily: 'Encode Sans, sans-serif' }}>
          Complete Vote
        </span>
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
      <Divider />
      <DialogContent sx={{ py: 4 }}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstname"
                size="small"
                value={voter.firstname}
                onChange={(e) =>
                  setVoter({ ...voter, firstname: e.target.value })
                }
                label="First Name"
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastname"
                size="small"
                value={voter.lastname}
                onChange={(e) =>
                  setVoter({ ...voter, lastname: e.target.value })
                }
                label="Last Name"
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                size="small"
                value={voter.email}
                onChange={(e) => setVoter({ ...voter, email: e.target.value })}
                label="Email"
                fullWidth
                required
                disabled={loading}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled={loading}
                fullWidth
                variant="contained"
                type="submit"
              >
                {loading ? (
                  <CircularProgress sx={{ color: '#ffffff' }} size={'1.5rem'} />
                ) : (
                  'submit'
                )}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled={loading}
                fullWidth
                variant="outlined"
                onClick={close}
              >
                close
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default VoteModal;
