import React from 'react';
import { Dialog } from '@mui/material';

const YouTube = ({ open, close, param }) => {
  return (
    <Dialog fullWidth maxWidth={'lg'} open={open} onClose={close}>
      <iframe
        width="100%"
        height="547"
        src={param}
        title="UBA Africa Conversations 2022"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </Dialog>
  );
};

export default YouTube;
