import React from "react";
import { AppBar, Toolbar, Button, Divider } from "@material-ui/core";
import { PeopleOutline, LinkedIn, Facebook, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <>
      <AppBar>
        <Toolbar></Toolbar>
      </AppBar>
      <div className="landingpage-wrapper">
        <div>
          <div className="landingpage-header">
            <h2>FundNest</h2>
            <p>Connecting emerging entrepreneurs to strategic investors</p>
          </div>
          <div className="landingpage-button">
            <Link style={{ textDecoration: "none" }} to="/investor-page">
              <Button variant="contained">Investor</Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to="/company-page">
              <Button variant="contained" style={{ marginTop: "50px" }}>
                Business
              </Button>
            </Link>
          </div>
        </div>
        <div className="landingpage-second">
          <PeopleOutline className="PeopleIcon" />
          <div className="landingpage-description">
            <Divider
              variant="middle"
              style={{ backgroundColor: "#ffff", height: "5px" }}
            />
            <blockquote className="landingpage-quote">
              "Strive to build a global network between businesses aiming to
              expand and investors interested in earning financial returns.
              Making attaining funds and exploiting investment opportunities
              more feasible."
            </blockquote>
            <Divider
              variant="middle"
              style={{ backgroundColor: "#ffff", height: "5px" }}
            />
            <svg
              width="55"
              height="55"
              viewBox="0 0 78 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fontSize: "40px",
                margin: "10px 0 0 0",
                position: "absolute",
                right: "20px",
              }}
            >
              <path
                d="M36.7052 19.4467L44.0542 21.3738C44.3037 21.4319 44.5271 21.5704 44.6894 21.7678C44.8518 21.9652 44.9441 22.2105 44.9519 22.4654C44.9519 23.0854 44.3981 23.5975 43.717 23.5975H38.8962C38.3768 23.596 37.8624 23.4953 37.381 23.301C36.6714 23.0045 35.8535 23.0719 35.3091 23.5705L32.7363 25.9289C32.6173 26.0326 32.5146 26.1534 32.4316 26.2874C32.3254 26.4608 32.2547 26.6534 32.2236 26.8541C32.1925 27.0548 32.2017 27.2597 32.2505 27.4569C32.2993 27.654 32.3869 27.8397 32.5082 28.003C32.6294 28.1663 32.782 28.3042 32.957 28.4086C34.3818 29.2596 35.9772 29.7887 37.6301 29.9584V32.3438C37.6301 33.5297 38.6904 34.5 39.9823 34.5H42.3344C43.6276 34.5 44.6879 33.5297 44.6879 32.3438V29.9719C49.1471 29.4867 52.5202 25.7941 51.9325 21.4816C51.506 18.382 48.8911 15.9158 45.6277 15.0533L38.2788 13.1262C38.0292 13.0681 37.8059 12.9296 37.6435 12.7322C37.4811 12.5348 37.3889 12.2895 37.381 12.0346C37.381 11.4146 37.9348 10.9025 38.6159 10.9025H43.4367C43.958 10.9033 44.4743 11.004 44.9574 11.199C45.6656 11.4955 46.4848 11.4281 47.0292 10.9295L49.6021 8.57109C49.7171 8.46964 49.8162 8.35151 49.8959 8.2207C50.003 8.04736 50.0746 7.85461 50.1064 7.65358C50.1383 7.45256 50.1298 7.24725 50.0814 7.04951C50.0331 6.85177 49.9458 6.66553 49.8247 6.50154C49.7036 6.33756 49.5511 6.19908 49.3759 6.0941C47.9506 5.2431 46.3548 4.71404 44.7014 4.5443V2.15625C44.7014 0.970312 43.6425 0 42.3493 0H39.9972C38.704 0 37.645 0.970312 37.645 2.15625V4.52812C33.1913 5.01328 29.8113 8.70586 30.399 13.0184C30.8242 16.118 33.4472 18.5842 36.7052 19.4467ZM76.5453 44.2166C74.9475 42.7746 72.4558 42.8689 70.7767 44.2166L58.2645 54.1758C56.7286 55.4021 54.817 56.0679 52.8479 56.0625H36.8325C36.2579 56.0625 35.7068 55.8353 35.3005 55.431C34.8942 55.0266 34.6659 54.4781 34.6659 53.9062C34.6659 53.3344 34.8942 52.7859 35.3005 52.3815C35.7068 51.9772 36.2579 51.75 36.8325 51.75H47.4341C49.5872 51.75 51.5926 50.2811 51.9366 48.1652C51.979 47.9223 51.9998 47.676 51.9989 47.4294C51.9967 46.2871 51.5392 45.1922 50.7268 44.3852C49.9144 43.5782 48.8135 43.125 47.6656 43.125H25.9994C22.3454 43.126 18.8028 44.3768 15.9653 46.668L9.66854 51.75H2.16662C1.592 51.75 1.04091 51.9772 0.634588 52.3815C0.228268 52.7859 0 53.3344 0 53.9062L0 66.8438C0 67.4156 0.228268 67.9641 0.634588 68.3685C1.04091 68.7728 1.592 69 2.16662 69H50.4782C52.4466 69.0015 54.3569 68.3361 55.8947 67.1133L76.3734 50.8066C76.866 50.4145 77.2666 49.9201 77.5473 49.3579C77.828 48.7957 77.982 48.1793 77.9985 47.5517C78.015 46.9241 77.8937 46.3005 77.6429 45.7245C77.3921 45.1484 77.018 44.6338 76.5467 44.2166H76.5453Z"
                fill="#FAD56B"
              />
            </svg>
            <div style={{position:'absolute', bottom:'40px', marginLeft:'20px'}}>
                <Facebook style={{fontSize:'40px', color:'grey'}}/>
                <LinkedIn style={{fontSize:'40px', color:'grey'}}/>
                <Twitter style={{fontSize:'40px', color:'grey'}}/>
            </div>
          </div>
        </div>
      </div>
      <AppBar style={{ top: "auto", bottom: "0px" }}>
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
}

export default LandingPage;
