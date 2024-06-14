'use client'
import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'
import CustomHeader from '../common/CustomHeader'
import React from 'react'

const Experience = () => {
  return (
    <>
        <Card
          sx={{boxShadow:"none"}}
          className='flex flex-col justify-center items-center mt-10 w-fit lg:w-full md:w-full'
        >
          <CustomHeader text={"EXPERIENCE"} />
        </Card>
    </>
  )
}

const HeaderBox = styled(Box)(() => ({
  padding : "10px",
  paddingInline : "40px",
  border : "4px solid black",
}))

export default Experience
