import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, TextField, Card, CardContent } from '@material-ui/core';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import SearchBar from "material-ui-search-bar";
import Typography from '@material-ui/core/Typography';
import icon from '../logo.png';
import logout from '@material-ui/icons/ExitToAppOutlined';
import './dashboard-page.css';

function DashboardPage() {

    const locations = [
    {
        "index": 0,
        "fund": "$7,588.58",
        "picture": "http://placehold.it/32x32",
        "age": 23,
        "color": "green",
        "name": "Carrie Daniels",
        "gender": "female",
        "company": "SPEEDBOLT",
        "email": "carriedaniels@speedbolt.com",
        "phone": "+1 (868) 450-3649",
        "location": "Swift Current, SK",
        "position": {
          "lat": 50.288055,
          "lng": -107.793892
        }
      },
      {
        "index": 1,
        "fund": "$2,723.13",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "color": "blue",
        "name": "Rebecca Shaffer",
        "gender": "female",
        "company": "ZYTRAX",
        "email": "rebeccashaffer@zytrax.com",
        "phone": "+1 (913) 555-3537",
        "location": "Richelieu, QC",
        "position": {
          "lat": 45.450001,
          "lng": -73.250000
        }
      },
      {
        "index": 2,
        "fund": "$5,257.60",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "color": "blue",
        "name": "Booth Stafford",
        "gender": "male",
        "company": "ZENSUS",
        "email": "boothstafford@zensus.com",
        "phone": "+1 (870) 517-2039",
        "location": "Guelph, ON",
        "position": {
          "lat": 43.549999,
          "lng": -80.250000
        }
      },
      {
        "index": 3,
        "fund": "$6,799.50",
        "picture": "http://placehold.it/32x32",
        "age": 20,
        "color": "purple",
        "name": "Edna Colon",
        "gender": "female",
        "company": "RETRACK",
        "email": "ednacolon@retrack.com",
        "phone": "+1 (901) 429-3606",
        "location": "Thompson, MB",
        "position": {
          "lat": 55.743332,
          "lng": -97.855278
        }
      },
      {
        "index": 4,
        "fund": "$3,940.29",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "color": "blue",
        "name": "Janelle Page",
        "gender": "female",
        "company": "QUONK",
        "email": "janellepage@quonk.com",
        "phone": "+1 (977) 424-3470",
        "location": "Lacombe, AB",
        "position": {
          "lat": 52.468334,
          "lng": -113.736946
        }
      },
      {
        "index": 5,
        "fund": "$5,501.54",
        "picture": "http://placehold.it/32x32",
        "age": 37,
        "color": "brown",
        "name": "Lilia Sheppard",
        "gender": "female",
        "company": "EWEVILLE",
        "email": "liliasheppard@eweville.com",
        "phone": "+1 (977) 436-3084",
        "location": "Pembroke, ON",
        "position": {
          "lat": 45.826653,
          "lng": -77.110886
        }
      },
      {
        "index": 6,
        "fund": "$9,423.42",
        "picture": "http://placehold.it/32x32",
        "age": 24,
        "color": "blue",
        "name": "Alyce Gardner",
        "gender": "female",
        "company": "XEREX",
        "email": "alycegardner@xerex.com",
        "phone": "+1 (804) 473-2734",
        "location": "Fort McMurray, AB",
        "position": {
          "lat": 56.732014,
          "lng": -111.375961
        }
      },
      {
        "index": 7,
        "fund": "$9,433.94",
        "picture": "http://placehold.it/32x32",
        "age": 29,
        "color": "blue",
        "name": "Sherri Frye",
        "gender": "female",
        "company": "EXOZENT",
        "email": "sherrifrye@exozent.com",
        "phone": "+1 (971) 538-3504",
        "location": "Halifax, NS",
        "position": {
          "lat": 44.651070,
          "lng": -63.582687
        }
      },
      {
        "index": 8,
        "fund": "$8,292.01",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "color": "orange",
        "name": "Elisa Finch",
        "gender": "female",
        "company": "EARTHPLEX",
        "email": "elisafinch@earthplex.com",
        "phone": "+1 (939) 407-2285",
        "location": "Terrace, BC",
        "position": {
          "lat": 54.515102,
          "lng": -128.610764
        }
      },
      {
        "index": 9,
        "fund": "$3,847.32",
        "picture": "http://placehold.it/32x32",
        "age": 30,
        "color": "brown",
        "name": "Whitehead Howard",
        "gender": "male",
        "company": "VIASIA",
        "email": "whiteheadhoward@viasia.com",
        "phone": "+1 (964) 413-3493",
        "location": "Mississauga, ON",
        "position": {
          "lat": 43.595310,
          "lng": -79.640579
        }
      }
    ]

    const containerStyle = {
        width: '1000px',
        height: '800px',
        borderRadius: '7px',
        marginTop: '30px'
      };
      
    const center = {
        lat: 43.6532,
        lng: -79.3832
    };

    const searchResults = locations.map((counter) =>
        <Card>
            <CardContent>
                <Typography color="textPrimary" gutterBottom>
                    {counter.name}
                </Typography>
                <Typography color="textSecondary">
                    {counter.email}
                </Typography>
                <Typography color="textSecondary">
                    {counter.phone}
                </Typography>
                <Typography color="textSecondary">
                    {counter.location}
                </Typography>
                <Typography color="textSecondary">
                    Principle Funding: {counter.fund}
                </Typography>
            </CardContent>
        </Card>
    );
    
    let perA = "hello there";


    return (
        <div id="dashboard-page" className="page">
            <div className="page-header">
                <span className="title-logo">
                    <h1 className="title">FundNest</h1>
                    <img src={icon} alt="FundNest logo" className="logo"></img>
                </span>
                <Button color="inherit" variant="contained" type="submit" size="small" className="contacts-btn">
                            Contacts
                </Button>
                <Button color="primary" variant="contained" type="submit" size="small" className="add-funds-btn">
                            Add Funds
                </Button>
                <img src={logout}></img>
            </div>
            <div className="results-map">

            
                <div className="search-column">
                    <SearchBar
                        className="search-bar"
                        placeholder="search investors"
                    
                    />
                    
                        {searchResults}
                </div>

                <div className="google-map">
                    <LoadScript googleMapsApiKey = "AIzaSyD-Y15yc74BemwgiYrqRcdAsWgvoFZVdT4">

                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={14}>
                            {
                                // <Marker key={'Investor A'} position={{lat:43.647450, lng: -79.380120}} clickable={true} label={true} name={'Investor!!'}/>
                                locations.map(item => {
                                    return(
                                        <Marker position={item.position}/>
                                    );
                                })
                            }
                        </GoogleMap>

                    </LoadScript>
                    
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;