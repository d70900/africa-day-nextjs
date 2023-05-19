/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconButton, Menu, MenuItem } from '@mui/material';

const Header1 = () => {
  const router = useRouter();
  const { pathname } = router;
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const open = Boolean(menuAnchor);
  const openMenu = (event) => setMenuAnchor(event.currentTarget);
  const handleClose = () => setMenuAnchor(null);

  return (
    <React.Fragment>
      <Container>
        <div className="wrapper">
          <div className="links">
            <Link href="/">
              <a className="home-icon">
                {pathname === '/' ? (
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
                ) : (
                  <img
                    src="/img/africa-day-logo.png"
                    alt="africa-day-logo"
                    className="africa-day-logo"
                  />
                )}
              </a>
            </Link>
            <Link href="/#panelists">
              <a>Event Info</a>
            </Link>
            <Link href="/virtual-conference-room">
              <a>Join Conference</a>
            </Link>
            <Link href="/#previous_editions">
              <a>Previous editions</a>
            </Link>
          </div>
          <a href="https://ubagroup.com" className="logo">
            <img src="/img/uba-logo.svg" alt="logo" />
          </a>
        </div>
      </Container>
      <Mobile>
        <div className="logo">
          <Link href="/">
            <a>
              <img
                src="/img/africa-day-logo.png"
                alt="africa-day-logo"
                className="africa-day-logo"
                draggable="false"
              />
            </a>
          </Link>
        </div>
        {/* <div className="links">
          <Link href="/#panelists">
            <a>Event Info</a>
          </Link>
          <Link href="/virtual-conference-room">
            <a>Join Conference</a>
          </Link>
        </div> */}
        <IconButton size="small" className="icon-button" onClick={openMenu}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={menuAnchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'mobile-menu-button',
          }}
        >
          <MenuItem
            onClick={() => {
              router.push('/#panelists');
              handleClose();
            }}
          >
            Event Info
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push('/virtual-conference-room');
              handleClose();
            }}
          >
            Join Conference
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push('/#previous_editions');
              handleClose();
            }}
          >
            Previous Editions
          </MenuItem>
        </Menu>
      </Mobile>
    </React.Fragment>
  );
};

export default Header1;

const Container = styled('header')`
  padding: 1rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  @media (max-width: 600px) {
    display: none;
  }
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        .africa-day-logo {
          max-width: 4rem;
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

const Mobile = styled('header')`
  @media (min-width: 600px) {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  .logo a img {
    max-width: 48px;
  }
  .icon-button {
    background-color: #e5e5e5;
    display: grid;
    place-items: center;
    /* padding: 00.125rem; */
    svg {
      color: #707070;
      width: 1.25rem;
    }
  }
`;
