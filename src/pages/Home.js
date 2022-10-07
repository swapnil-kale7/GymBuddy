import React from 'react'
import { Box } from '@mui/material'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'

export const Home = () => {
  return (
    <Box>
    <HeroBanner/>
    <SearchExercise/>
    <Exercises/>
    </Box>
  )
}
