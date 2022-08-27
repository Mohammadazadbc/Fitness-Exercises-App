import React, { useState } from 'react'
import {Stack, Typography, Box, TextField, Button} from "@mui/material"

import { FetcheData , exerciseOptions} from '../utile/FeatchData'




function SearchExercises() {
  const [search, setSearch] = useState("");
  const [exercices, setExercices] = useState([]);

  const handleSearch = async()=>{
    if(search){
      const exercisesData = await FetcheData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      
      const searchExercies = exercisesData.filter(
        (exercies)=> exercies.name.toLocaleLowerCase().includes(search)
        || exercies.target.toLocaleLowerCase().includes(search)
        || exercies.equipment.toLocaleLowerCase().includes(search)
        || exercies.bodyPart.toLocaleLowerCase().includes(search)
        );
        setSearch("");
        setExercices(searchExercies)
    }
  }
  return (
    <Stack alignItems='center' mt="37px" p="20px" justifyContent="center" >
      <Typography fontWeight="600" fontSize="30px">Awesome Exercises You <br />  Should Know</Typography>

      <Box position="relative" mb="72px" >
        <TextField
          sx={{
            input :{ 
            fontWeight: '700',
            border:'none',
            borderRadius:'4px'
          },
          width: {lg:'800px', xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
          }}
          height="76px"
          value={search}

          onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        
        />
        <Button className='search-btn' sx={{
          bgcolor:"#ff2625",
          color:'#fff',
          textTransform:"none",
          width: {lg:'175px', xs: '80px'},
          fontSize: {lg:"20px", xs :"12px"},
          height:"56px",
          position: 'absolute',
          right:0  
        }} onClick={handleSearch} >Search</Button>

      </Box>
    </Stack>
  )
}

export default SearchExercises