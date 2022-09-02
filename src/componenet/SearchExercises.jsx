import React, { useEffect, useState } from 'react'
import {Stack, Typography, Box, TextField, Button} from "@mui/material"

import { FetcheData , exerciseOptions} from '../utile/FeatchData'

import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({bodyPart, setBodyPart, setExercices}) {
  const [search, setSearch] = useState("");
  
  const [bodyParts, setBodyParts] = useState([])


  useEffect(()=>{
      const fetchExercicesData = async ()=>{
        const bodyPartsData = await FetcheData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);

        setBodyParts(['all', ...bodyPartsData])
      }

      fetchExercicesData();
  },[])

  const handleSearch = async()=>{
    if(search){
      const exercisesData = await FetcheData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch("");
        setExercices(searchedExercises )
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

          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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

      <Box sx={{
        position:'relative', width:'100%' , p:'20px'
      }}>

        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}  />

      </Box>
    </Stack>
  )
}

export default SearchExercises