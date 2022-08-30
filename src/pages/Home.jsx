
import {Box} from "@mui/material"
import Exercises from "../componenet/Exercises"
import HeroBanner from "../componenet/HeroBanner"
import SearchExercises from "../componenet/SearchExercises"
import {useState} from "react"
function Home() {
  

  const [exercices, setExercices] = useState([]);
  const [badyPart, setBodyPart] = useState('all');
  console.log(badyPart)
 
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercices={setExercices}  badyPart={badyPart} setBodyPart={setBodyPart} />
      <Exercises setExercices={setExercices} exercices={exercices} badyPart={badyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home