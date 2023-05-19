/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import styled from '@emotion/styled';
import { Button, IconButton, Tooltip } from '@mui/material';

const DialogModal = (props) => {
  const { open, close, item } = props;
  const img = sessionStorage.getItem('img');

  return (
    <Dialog fullWidth maxWidth={'md'} open={open} onClose={close}>
      <DialogContent sx={{ p: 0 }}>
        <Container>
          <Tooltip title="Close" placement="left">
            <IconButton className="close-btn" onClick={close}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </Tooltip>
          <div className="image-wrapper">
            <img src={img} alt={item?.name} />
          </div>
          <div className="text-content">
            <p className="designation">{item?.designation}</p>
            <h2 className="title">{item.name}</h2>
            <p className="summary">{item.summary}</p>
            {/* <Button
              variant="contained"
              fullWidth
              onClick={close}
              sx={{
                margin: '1rem 0',
                background: '#D70900',
                '&:hover': { background: '#D7090090' },
              }}
            >
              close
            </Button> */}
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;

const Container = styled('div')`
  width: 100%;
  display: grid;
  grid-template-columns: 360px 1fr;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
  .close-btn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    svg {
      width: 1.5rem;
    }
  }
  .image-wrapper {
    img {
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        width: 100%;
        border-radius: 50%;
      }
    }
    @media (max-width: 768px) {
      max-width: 240px;
    }
  }
  .text-content {
    padding: 2rem;
    max-height: 464px;
    overflow-y: auto;
    @media (max-width: 768px) {
      padding: 1rem 0;
      max-height: unset;
    }
    .designation {
      font-size: 1.125rem;
      color: #5a5a5a;
      text-transform: uppercase;
      font-family: Encode Sans, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 0.875rem;
      }
    }
    .title {
      margin: 0 0 1rem 0;
      font-size: 2rem;
      letter-spacing: 1px;
      font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #2a2a2a;
      @media (max-width: 768px) {
        text-align: center;
        font-size: 1.25rem;
      }
    }
    .summary {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
        sans-serif;
      line-height: 125%;
      color: #7a7a7a;
      text-align: justify;
      @media (max-width: 768px) {
        font-size: 0.875rem;
        line-height: 140%;
      }
    }
  }
`;
