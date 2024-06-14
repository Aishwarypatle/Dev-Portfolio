import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const CustomHeader = ({text}) => {
  return (
    <HeaderBox>
        <p className='font-medium tracking-widest opacity-50'>{text}</p>
    </HeaderBox>
  )
}
const HeaderBox = styled(Box)(() => ({
    padding : "10px",
    paddingInline : "40px",
    border : "4px solid grey"
  }))

export default CustomHeader
