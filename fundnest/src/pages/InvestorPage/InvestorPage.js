import React from "react";
import "./InvestorPage.css";
import Logo from "../../assets/Logo.png";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const InvestorPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="investorpage-header">
        <div className="company-header">
          <h2>FundNest</h2>
          <img src={Logo} alt='Company Logo' />
        </div>
        <p>Connecting emerging entrepreneurs to strategic investors</p>
      </div>
      <h3 className="welcome-message">Welcome Investor!</h3>
      <div style={{ textAlign: "center" }}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-full-width"
              label="First Name"
              placeholder="Enter your First Name"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Last Name"
              placeholder="Enter your Last Name"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="outlined-full-width"
              label="Email"
              placeholder="Enter your email"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Starting Principal Amount?"
              placeholder="Prinipal Amount"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </div>
        </form>
        <br/>
        <Button className="investorpage-button">
            Register
        </Button>
      </div>
    </div>
  );
};

export default InvestorPage;
