import { Dialog, DialogContent } from '@mui/material';
import React from 'react';

const YouTube = ({ open, close, lang }) => {
  const en = 'https://youtu.be/paBgzFtcSaI';
  const fr = 'https://youtu.be/4NiCm8VgYlU';
  return (
    <Dialog fullWidth maxWidth={'sm'} open={open} onClose={close}>
      <div>
        <iframe
          width="100%"
          height="547"
          src={lang === 'en' ? en : fr}
          title="UBA Africa Conversations 2022"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Dialog>
  );
};

export default YouTube;
