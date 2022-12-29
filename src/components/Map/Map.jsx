import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
//import { styled} from '@mui/material/styles';



const Map = ({setCoordinates,setBounds,coordinates,places,setChildClicked}) => {
  const isDesktop = useMediaQuery('(min-width:600px)');

//const coord ={lat:0,lng :0};
   
  return (
      <div  style={{width:'100%', height:'85vh'}}>
    <GoogleMapReact 

    bootstrapURLKeys={{  key : 'AIzaSyDZPtFSuMLer8Tug-HrkQ2RZ5jn0fHeYoY'}}
    defaultCenter={coordinates} 
    
    center={coordinates}
    defaultZoom={14}
    options={''}
    onChange={(e)=>{ 
      setCoordinates({lat:e.center.lat , lng:e.center.lng}); 
      setBounds({ne :e.marginBounds.ne, sw:e.marginBounds.sw})
    }}
    onChildClick={(child) => setChildClicked(child)}
    >
      { places?.map((place, i) => (
          <div
           style={{position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 }}}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} style={{padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px'}}>
                  <Typography  variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    style={{cursor: 'pointer'}}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt="restaurent photo"/>
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
    </GoogleMapReact>
    </div>
     
  )
}

export default Map
