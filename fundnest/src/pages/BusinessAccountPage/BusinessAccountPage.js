import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Paper,
  Card,
  CardContent,
  Typography,
  InputBase,
} from "@material-ui/core";
import {
  Search,
  Create,
  ExitToAppOutlined,
} from "@material-ui/icons";
import { fade, makeStyles } from "@material-ui/core/styles";
import Logo from "../../assets/Logo.png";
import Popup from "../../components/Popup";
import "./BusinessAccountPage.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.7),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const BusinessAccountPage = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [selected, setSelected] = useState({});

  const getData = () => {
    fetch("data/company.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const mapStyles = {
    position: "relative",
    height: "500px",
    width: "100%",
    overflow: "hidden",
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  const defaultCenter = {
    lat: 43.6532,
    lng: -79.3832,
  };

  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  var fundsSecured = "25100";

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState();
  const [totalFunds, setTotalFunds] = useState(fundsSecured);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddFunds = () => {
    let temp = parseFloat(totalFunds)+parseFloat(value);
    setTotalFunds(temp);
  }

  const clearFunds = () => {
    setValue('');
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <>
          <AppBar className="businesspage-appbar" position="fixed">
            <Toolbar>
              <div className="businesspage-header">
                <div className="header-logo">
                  <h2>FundNest</h2>
                  <img src={Logo} alt="Company Logo" />
                </div>
                <div className="header-button">
                  <Button className="contacts-button" >Contacts</Button>
                  <Button className="addfunds-button" onClick={handleClickOpen}>Add Funds</Button>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <IconButton>
                      <ExitToAppOutlined />
                    </IconButton>
                  </Link>
                  
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </>

        {/* add funds pop up window code below */}
        <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Funds to Your Business</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount of funds to add to your Funds Secured.
          </DialogContentText>
          <CurrencyTextField
              label="Amount"
              variant="standard"
              value={value}
              currencySymbol="$"
              outputFormat="string"
              onChange={(event,value)=> setValue(value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {handleClose(); handleAddFunds(); clearFunds();}} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>


        <div className="businesspage-main">
          <div style={{ overflowY: "scroll", maxHeight: "100vh" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search Investors"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <br />
            <Paper elevation={3} style={{ backgroundColor: "#EDECEC" }}>
              {data &&
                data.length &&
                data.map((company) => {
                  return (
                    <Card style={{border:`2px solid ${company.color}`}}>
                      <CardContent style={{ textAlign: "center" }}>
                        <Typography color="textSecondary" gutterBottom>
                          Name: {company.name}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Company Name: {company.company}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Phone Number: {company.phone}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Location: {company.location}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          Prinicpal Funding Needed: {company.fund}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })}
            </Paper>
          </div>
          <div></div>
          <div>
            <div className="FundInfo">
              <div style={{ display: "flex" }}>
                <span>Edit</span>
                <Create
                  style={{ fontSize: "15px", margin: "4px 0px 0px 4px" }}
                />
              </div>
              <p>
                FUNDING GOAL:{" "}
                <span style={{ color: "#ffff", fontWeight: "500" }}>
                  $36,100.00
                </span>{" "}
                | FUNDS SECURED:{" "}
                <span style={{ color: "#ffff", fontWeight: "500" }}>
                  {numberFormatter.format(totalFunds)}
                </span>
              </p>
            </div>
            <br />
            <LoadScript googleMapsApiKey="AIzaSyD-Y15yc74BemwgiYrqRcdAsWgvoFZVdT4">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={2.8}
                center={defaultCenter}
              >
                {data.length &&
                  data.map((person) => {
                    return (
                      <Marker
                        key={person.name}
                        position={person.position}
                        onClick={() => onSelect(person)}
                      />
                    );
                  })}
                {selected.position && (
                  <InfoWindow
                    position={selected.position}
                    clickable={true}
                    onCloseClick={() => setSelected({})}
                  >
                    {<Popup props={selected} division="Business" />}
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessAccountPage;
