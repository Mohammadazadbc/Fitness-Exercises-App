import React,{useEffect, useState} from 'react'
import  Pagination  from '@mui/material/Pagination';
import {Box, Stack, Typography} from "@mui/material"
import {exerciseOptions, FetcheData } from "../utile/FeatchData"
import ExerciseCard from './ExerciseCard';


function Exercises({setExercices, exercices}) {

  const [currentPage, setCurrentPage] = useState(1)
  const exerciscesParPage = 9

  const indexOfLastExercise = currentPage * exerciscesParPage
  const indexOfFirstExercise = indexOfLastExercise - exerciscesParPage
  const currentExercises = exercices.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate =(e, value)=>{
      setCurrentPage(value)


      window.scrollTo({top:1800, behavior:'smooth'})
  }
  
  return (
    <Box id="exercise" ex={{mt:{lg:'110px'}}} mt="50px" p='20px' >
        <Typography variant='h3' mb="46px" > Showing Results </Typography>

        <Stack direction="row" sx={{
          gap: {lg:'110px', xs:'50px'}}}
          flexWrap="wrap" justifyContent="center"
          >
              {currentExercises.map((exercice,index)=>(
               <ExerciseCard key={index} exercice={exercice} />
              ))}
        </Stack>
        <Stack mt="100px" alignItems='center'  >
                { exercices.length > 9 && ( 
                  <Pagination color='standard' 
                   shape='rounded'
                    defaultPage={1}
                    count={Math.ceil(exercices.length / exerciscesParPage)}
                    page={currentPage}
                    onChange={paginate}
                    size="large"
                  />
                 ) }

        </Stack>
    </Box>
  )
}

export default Exercises