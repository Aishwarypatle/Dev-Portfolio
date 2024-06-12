import React, { useState } from 'react'
import NavigationCard from '../../components/bottomNavigation/NavigationCard'
import { Box, Card, CardContent, CardHeader, Grid, Tab, Tabs } from '@mui/material'
import { techMenu } from '../../constant/constant'
import Frontend from '../../components/Skills/Frontend'
import Cloud from '../../components/Skills/Cloud'
import Backend from '../../components/Skills/Backend'
import Testing from '../../components/Skills/Testing'
import Tools from '../../components/Skills/Tools'
import ProblemSolving from '../../components/Skills/ProblemSolving'
import Database from '../../components/Skills/Database'

const index = () => {
  const [ tab , setTab ] = useState("frontend")
  const handleTabChange = (e ,val) => {
    setTab(val)
  }
  return (
    <>
      <Card>
        <CardHeader 
          title="Tech Stack"
          sx={{display: "flex",justifyContent:"center"}}
        />
        <CardContent>
          <Grid container>
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
          <Grid container>
            <Grid item>
                {tab == "frontend" && (<Frontend />)}
                {tab == "backend" && (<Backend />)}
                {(tab == "cloud") && (<Cloud />)}
                {(tab == "database") && (<Database />)}
                {(tab == "problemsolving") && (<ProblemSolving />)}
                {(tab == "tools") && (<Tools />)}
                {(tab == "testing") && (<Testing />)}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default index
