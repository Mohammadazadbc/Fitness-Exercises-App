import React from 'react'
import {Box, Stack ,Typography} from "@mui/material"
import HorizontalScrolBar from "./HorizontalScrollbar"
import Loader from './Loader'

function SimilarExercises({targetMuscleExercise, equipmentExercises}) {
  return (
    <Box 
      sx={{marginTop:{lg:'100px', xs:''}}}
    >
      <Typography variant='h3'>Exercises that target the same muscle group </Typography>
      <Stack direction="row" sx={{p:'2', position:'relative'}}>
      {targetMuscleExercise.lenght ? <HorizontalScrolBar data={targetMuscleExercise} /> : <Loader />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises