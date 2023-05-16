/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Header1 = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="links">
          <Link href="/">
            <a className="home-icon">
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
          </Link>
          <Link href="/">
            <a>Event Info</a>
          </Link>
          <Link href="/">
            <a>Join Conference</a>
          </Link>
        </div>
        <a href="https://ubagroup.com" className="logo">
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
    justify-content: space-between;
    .links {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .home-icon {
        svg {
          width: 1rem;
          color: #444444;
          margin-bottom: -0.0625rem;
        }
      }
      a {
        color: #444444;
        font-size: 0.875rem;
        font-family: Raleway, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-transform: uppercase;
        &:hover {
          color: #d70900;
        }
      }
    }
    .logo {
      img {
        max-width: 96px;
      }
    }
  }
`;
