'use client'
import { Box, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import "../app/globals.css"
import { projectDetails } from '../constant/constant';
import styled from '@emotion/styled';
import ProjectCard from '../components/projects/ProjectCard';

const Project = () => {
  return (
    <>
      <Card className='shadow-none w-full grid place-items-center mt-10' >
        <HeaderBox>
            <p className='font-medium tracking-widest'>Projects</p>
        </HeaderBox>
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
      </Card>
    </>
  )
}

const HeaderBox = styled(Box)(() => ({
  padding : "10px",
  paddingInline : "40px",
  border : "4px solid rgb(106, 152, 240)",
}))

export default Project
