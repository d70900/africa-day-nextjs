import React from 'react';
import { Dialog } from '@mui/material';

const YouTube = ({ open, close, lang }) => {
  return (
    <Dialog fullWidth maxWidth={'md'} open={open} onClose={close}>
      <>
        {lang === 'en' ? (
          <iframe
            width="100%"
            height="547"
            src="https://www.youtube.com/embed/paBgzFtcSaI"
            title="UBA Africa Conversations 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            allowFullScreen
          ></iframe>
        ) : lang === 'fr' ? (
          <iframe
            width="100%"
            height="547"
            src="https://www.youtube.com/embed/4NiCm8VgYlU"
            title="UBA Africa Conversations 2022"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            width="100%"
            height="547"
            src="https://www.youtube.com/embed/FcP0Iszi9nw"
            title="UBA Africa Conversations 2022"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </>
    </Dialog>
  );
};

export default YouTube;
