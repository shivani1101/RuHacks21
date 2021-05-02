import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Popup = ({ props, division }) => {
  return (
    <Card style={{border:`2px solid ${props.color}`}}>
      <CardContent style={{ textAlign: "center" }}>
        <Typography style={{ color: "black" }} gutterBottom>
          Name: {props.name}
        </Typography>
        <Typography style={{ color: "black" }} gutterBottom>
          {division === "Business" ? "Company Name: " : "Email: "}
          {division === "Business" ? props.company : props.email}
        </Typography>
        <Typography style={{ color: "black" }} gutterBottom>
          Phone Number: {props.phone}
        </Typography>
        <Typography style={{ color: "black" }} gutterBottom>
          Location: {props.location}
        </Typography>
        <Typography style={{ color: "black" }} gutterBottom>
          {division === "Business"
            ? "Maximum Investment Fund: "
            : "Prinicpal Funding: "}{" "}
          {props.fund}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Popup;
