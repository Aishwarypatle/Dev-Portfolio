'use client'
import { Box, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import "../app/globals.css"
import { projectDetails } from '../constant/constant';
import styled from '@emotion/styled';
import ProjectCard from '../components/projects/ProjectCard';
import CustomHeader from '../common/CustomHeader';

const Project = () => {
  return (
    <>
      <Box className='shadow-none w-full grid place-items-center' >
        <CustomHeader text={"PROJECTS"} />
        <CardContent className='w-full grid place-items-center font-normal'>
            <p className='block text-xs '>Things I have built so far</p>
              <Box>
                <Grid container>
                  {
                    projectDetails?.map((item) => (
                      <Grid item md={6} lg={4}>
                        <ProjectCard item={item}/>
                      </Grid>
                    ))
                  }
                </Grid>
              </Box>
        </CardContent>
      </Box>
    </>
  )
}
export default Project
