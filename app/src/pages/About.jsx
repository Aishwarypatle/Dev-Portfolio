'use client'
import styled from '@emotion/styled'
import { Box, Card, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import user from '../assets/images/userr.png'
import "../app/globals.css";


const About = () => {
  return (
    <Card
      sx={{boxShadow:"none"}}
      className='flex flex-col justify-center items-center mt-10 w-fit lg:w-full md:w-full'
    >
      <HeaderBox>
          <p className='font-medium tracking-widest'>About</p>
       </HeaderBox>
       <Grid container className='mt-20 ' direction={"row"} justifyContent={"center"} sx={{zIndex:10}}>
          <Grid item md={4} className='flex justify-center'>
            <ImageContainer >
              <Image 
                src={user}
                alt={"Aishwary Patle"}
                width={200}
                height={200}
              />
            </ImageContainer>
          </Grid>
          <Grid item md={8}>
            <article className='font-normal text-lime-50 font-mono'>
              Hi, I'm Aishwary Patle, a self-taught passionate Software Engineer from India, currently working at A'alda vet India as a SDE-1. I've made countless side projects and I also posses magical powers of using react to build delightful user interfaces. I also love doing open source development, It gives me a wonderful feeling of achievement and joy which I cannot explain in words. 
              <br /><br />I have a deep understanding of Data structures and algorithms as well as SOLID principles. I am learning System Design as well as how the applications can made scalable
            </article>
          </Grid>
       </Grid>
       <Grid container className='md:m-12' spacing={4} sx={{zIndex:10}} direction={"row"} justifyContent={"center"}>
          <Grid item  className='flex justify-center'> 
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“Simplicity is the baddest choice to be the best.“</p>
              <br /><br />
              <i className='mt-16 flex justify-end'>-Aishwary Patle</i>
            </CardHolder>
          </Grid>
          <Grid item  className='flex justify-center'>
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“I know I’m not successful enough,but I’m passionate enough not to worry about success.“</p>
              <br /><br />
              <i className='mt-8 flex justify-end'>-Aishwary Patle</i>
            </CardHolder>
          </Grid>
          <Grid item  className='flex justify-center'>
            <CardHolder>
              <p className='font-normal text-sm font-mono'>“Creativity is the driver of an unstoppable train called Passion.”</p>
              <br /><br />
              <i className='mt-8 flex justify-end'>-Aishwary Patle</i>
            </CardHolder>
          </Grid>
       </Grid>
       <BackgroundShadow></BackgroundShadow>
    </Card>
  )
}

const HeaderBox = styled(Box)(() => ({
  padding : "10px",
  paddingInline : "40px",
  border : "4px solid rgb(106, 152, 240)",
}))
const ImageContainer = styled(Box)(() => ({
  border : "4px solid white",
  borderRadius : "50%",
  overflow:"hidden",
  width : "fit-content"
}))
const CardHolder = styled(Box)(() => ({
  display :"flex",
  flexDirection :"column",
  justifyContent :"space-between",
  backgroundColor: "rgb(248, 248, 248)",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 10px",
  borderRadius : "20px",
  padding :"15px",
  minHeight :"170px",
  maxWidth :"275px",
  color :"#65c3c8",
}))
const BackgroundShadow = styled(Box)(() => ({
  position: "relative",
  left: "0px",
  width: "100%",
  minHeight: "500px",
  background: "#65c3c8",
  transform: "skewY(-2deg)",
  // zIndex: -1,
  pointerEvents: "none",
  bottom :"600px",
}))
export default About
