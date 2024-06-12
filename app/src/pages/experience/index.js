import styled from '@emotion/styled'
import { Box, Card } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <>
        <Card
          sx={{boxShadow:"none"}}
          className='flex flex-col justify-center items-center mt-10 w-fit lg:w-full md:w-full'
        >
          <HeaderBox>
            <p className='font-medium tracking-widest'>Experience</p>
          </HeaderBox>
        </Card>
    </>
  )
}

const HeaderBox = styled(Box)(() => ({
  padding : "10px",
  paddingInline : "40px",
  border : "4px solid black",
}))

export default index
