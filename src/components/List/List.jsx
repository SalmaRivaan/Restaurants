import React, { useState, useEffect, createRef } from 'react';
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@mui/material';


import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places,isLoading,childClicked,type, setType, rating, setRating}) => {
  
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
   const refs= Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
    setElRefs(refs);
  }, [places]);


  return (
    <div>
      <Typography variant='h4'>Restaurants around you </Typography>
      {isLoading ? (
        <div style={{height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
      <FormControl style={{padding : "8px", minWidth: 120,marginBottom: "30px"}}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(event)=>setType(event.target.value)}>
        <MenuItem value='restaurant'>Restaurant</MenuItem> 
              
</Select>
      </FormControl>
      <FormControl style={{padding : "8px",minWidth: 120,marginBottom: "30px"}}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(event)=>setRating(event.target.value)}>
        <MenuItem value={0}>All</MenuItem> 
        <MenuItem value={3}>Above 3.0</MenuItem> 
        <MenuItem value={4}>Above 4.0</MenuItem>    
        <MenuItem value={4.5}>Above 4.5</MenuItem>         
</Select>
      </FormControl>
      <Grid container spacing={3} style={{ height: "75vh",overflow: "auto",}}>
        {places?.map ((place,i) =>(
          <Grid ref={elRefs[i]} item key={i} xs={12}><PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} /></Grid>
        ))}
      </Grid>
      </>
      )}
    </div>
  )
}

export default List
