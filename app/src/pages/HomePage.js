
import React from 'react'
import ProfileCard from '../components/ProfileCard'
import NavigationCard from '../components/bottomNavigation/NavigationCard'
import "../app/globals.css";
import Project from './Project';
import { Paper } from '@mui/material';
import Skills from './Skills';
import About from './About';
import Foooter from '../components/footer/Foooter';
import InfoLayer from '../components/InfoLayer';
import Experience from './Experience';

const HomePage = () => {
  return (
    <>
      <Paper className='overflow-auto h-screen'>
          <ProfileCard />
          <InfoLayer />
          <Skills />
          {/* <Experience /> */}
          <Project />
          <About />
          <Foooter />
          {/* <NavigationCard /> */}
      </Paper>
    </>
  )
}

export default HomePage
