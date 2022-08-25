
import {Box} from "@mui/material"
import Exercises from "../componenet/Exercises"
import HeroBanner from "../componenet/HeroBanner"
import SearchExercises from "../componenet/SearchExercises"
function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home