import React from 'react'
import { Box, Stack, Typography } from "@mui/material"
function ExerciseVideos({videoExericse, name}) {

  if(!videoExericse.length) return 'Loading...'
  return (
    <Box sx={{marginTop:{ lg:'200px', xs : '20px'}}}>
        <Typography variant='h3' marginBottom='33px'>Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}> {name} </span> exercise videos </Typography>

        <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
          sx={{flexDirection:{lg:'row'}, gap:{lg: '110px', xs:'0'} }}
        >
          {videoExericse?.slice(0,3)?.map((item,index) =>(
            <a 
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            > <img src={item.video.thumbnails[0].url} alt='' /> </a>
          ))

          }
        </Stack>
    </Box>
  )
}

export default ExerciseVideos