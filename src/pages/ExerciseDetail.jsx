  import React,{useEffect, useState} from 'react'
  import { useParams } from "react-router-dom"
  import {Box} from "@mui/material"
  import {exerciseOptions, FetcheData, youtubeOption} from "../utile/FeatchData"
  
  import Detail from '../componenet/Detail'
  import SimilarExercises from '../componenet/SimilarExercises'
  import ExerciseVideos from '../componenet/ExerciseVideos'
function ExerciseDetail() {
  const [exerciseData, setExerciseData] = useState([])
  const  [videoExericse, setVideoExercise] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExericeData = async()=>{
      const exericeDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeVideoUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exericeDetailData = await FetcheData(`${exericeDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseData(exericeDetailData)
      
      const exerciseVideosData = await FetcheData(`${youtubeVideoUrl}/search?query=${exericeDetailData.name} exercise`, youtubeOption);
      setVideoExercise(exerciseVideosData.contents);
     
    }

    fetchExericeData();

  },[id])


  return (
    <Box>
      <Detail exerciseData={exerciseData} />
      <ExerciseVideos videoExericse={videoExericse} name={exerciseData.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail