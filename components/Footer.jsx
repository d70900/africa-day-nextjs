import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="content">
          <p className="left-text">
            &copy; {new Date().getFullYear()} UBA Group <br />
            <span>
              United bank for Africa is licensed and regulated by the Central
              Bank of Nigeria
            </span>
          </p>
          <div className="share">
            <span>Share</span>
            <div className="share-icons">
              <a
                href="mailto:?subject=Africa%20Day%202021&body=%20Join%20the%20UBA%20Africa%20Day%202021%20Conference%20with%20Influential%20African%20Leaders%20in%20the%20Discourse%20Towards%20Contributing%20to%20the%20Development%20of%20Africa.%20Reserve%20Your%20Spot.%20Register%20for%20Free%20Online.%20https://africaday.ubagroup.com/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="mail"
                >
                  <path
                    fill="#231f20"
                    d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                  ></path>
                  <path
                    fill="#231f20"
                    d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fafricaday.ubagroup.com%2F"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                >
                  <g id="7935ec95c421cee6d86eb22ecd11b7e3">
                    <path
                      d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
			c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
			c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
			l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Join%20the%20UBA%20Africa%20Day%202023%20Conference%20with%20Influential%20African%20Leaders%20in%20the%20Discourse%20Towards%20Contributing%20to%20the%20Development%20of%20Africa.%0D%0AReserve%20Your%20Spot%20at%20https%3A%2F%2Fafricaday.ubagroup.com.%0D%0A%0D%0A&hashtags=africa,uba,africaday,UBAAfricaConversations"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                >
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                </svg>
              </a>
              <a
                href="whatsapp://send?text=https%3A%2F%2Fafricaday.ubagroup.com%2F/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="whatsapp"
                >
                  <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="right-text">
            <a
              href="https://www.ubagroup.com/terms-conditions"
              target="_blank"
              rel="noreferrer"
            >
              Terms of use
            </a>
            <a
              href="https://www.ubagroup.com/uba-privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a href="https://www.ubagroup.com" target="_blank" rel="noreferrer">
              Website
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled('footer')`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding: 1rem 1.5rem;
  .wrapper {
    max-width: 1440px;
    margin: 0 auto;
    .content {
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: space-between;
      font-family: Raleway;
      font-size: 13px;
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
      .share {
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          font-size: 13px;
        }
        .share-icons {
          display: flex;
          gap: 0.5rem;
          svg {
            width: 1.75rem;
            height: 1.75rem;
            background-color: #7a7a7a70;
            padding: 0.375rem;
            border-radius: 50%;
            opacity: 50%;
            cursor: pointer;
            transition: all ease-in-out 0.2s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
      }
      .right-text {
        display: flex;
        gap: 1rem;
        a {
          color: inherit;
          text-decoration: none;
          &:hover {
            color: #d70900;
          }
          &:active {
            color: #d70900;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
