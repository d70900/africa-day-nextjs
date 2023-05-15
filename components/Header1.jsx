/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';

const Header1 = () => {
  return (
    <Container>
      <div className="wrapper">
        <a href="https://ubagroup.com">
          <img src="/img/uba-logo.svg" alt="logo" />
        </a>
      </div>
    </Container>
  );
};

export default Header1;

const Container = styled('header')`
  padding: 1.5rem;
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    img {
      max-width: 128px;
    }
  }
`;
