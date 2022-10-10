import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'

export const Home = () => {
  const [bodypart, setbodypart] = useState('all')
  const [exercises, setExercises] = useState([]);
  console.log(bodypart);
  return (
    <Box>
    <HeroBanner/>
      <SearchExercise setExercises={setExercises} 
        bodypart={bodypart} setbodypart={setbodypart} />
    <Exercises 
        setExercises={setExercises}
        bodypart={bodypart} exercises={exercises}
    />
    </Box>
  )
}
