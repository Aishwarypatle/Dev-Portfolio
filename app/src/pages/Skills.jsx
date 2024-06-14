'use client'
import React, { useState } from 'react'
import { Box, Card, CardContent, CardHeader, Grid, Tab, Tabs } from '@mui/material'
import { techMenu } from '../constant/constant'
import Frontend from '../components/Skills/Frontend'
import Cloud from '../components/Skills/Cloud'
import Backend from '../components/Skills/Backend'
import Tools from '../components/Skills/Tools'
import "../app/globals.css";
import styled from '@emotion/styled'
import CustomHeader from '../common/CustomHeader'


const Skills = () => {
  const [ tab , setTab ] = useState("frontend")
  const handleTabChange = (e ,val) => {
    setTab(val)
  }
  return (
    <>
      <Card 
        sx={{boxShadow:"none"}}
        className='h-full flex flex-col justify-center items-center mt-10 w-fit lg:w-full md:w-full'
      >
      <CustomHeader text={"TECH STACK"}/>
      <CardContent>
        <Grid container direction={"row"} justifyContent={"center"}>
          <Grid item>
            <Tabs
              value={tab}
              onChange={handleTabChange}
            >
              {
                techMenu?.map((item) => (
                  <Tab value={item?.value} label={item?.label}/>
                ))
              }
            </Tabs>
          </Grid>
        </Grid>
        <Grid 
          container 
          direction="row" 
          justifyContent="center"
          className='mt-10'
        >
            <Grid item >
                {tab == "frontend" && (<Frontend />)}
                {tab == "backend" && (<Backend />)}
                {(tab == "cloud") && (<Cloud />)}
                {(tab == "tools") && (<Tools />)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Skills
