import styled from '@emotion/styled'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({item}) => {
    console.log({item})
  return (
    <>
        <Box sx={{backgroundColor: item?.color}} className="p-2 shadow-2xl m-4 rounded-2xl" >
            <Box sx={{height:"30rem", backgroundColor: "white"}} className="rounded-2xl px-8 py-4 ">
                <Box>
                    <Grid container direction={"row"} justifyContent={"center"}>
                        <ImageContainer>
                            <Image 
                                src={item?.image}
                                alt={item?.name}
                                height={100}
                                width={100}
                            />
                        </ImageContainer>
                    </Grid>
                </Box>
                <Box className="h-3/4 flex flex-col justify-between">
                    <Grid className='mt-10' container direction={"row"} justifyContent={'center'}>
                        <Typography variant='h5' className='mt-2 font-sans font-bold'>{item?.name}</Typography>
                        <Box className="flex flex-col justify-between items-baseline">
                            <Typography variant='p' className='text-sm font-sans mt-2'>{item?.desc}</Typography>
                        </Box>
                    </Grid>
                    <Grid container direction={"row"} className='mt-6'>
                        <div className='flex flex-wrap mb-4'>
                            {
                                item?.tech?.map((tech, index) => (
                                    <div className='text-white text-xs p-2 mx-1 my-1 rounded-xl'  style={{backgroundColor:item?.color}} key={index}>{tech}</div>
                                ))
                            }
                        </div>
                        <div className='flex justify-between w-full'>
                            <a href={item?.link} className='underline text-xs font-light '><LinkIcon fontSize='small' /> Live Preview</a>
                            <a href={item?.code} className='underline text-xs font-light'><GitHubIcon fontSize='small'/> Source Code</a>
                        </div>
                    </Grid>
                </Box>
            </Box>
        </Box>
    </>
    )
}

const ImageContainer = styled(Box)(() => {

})
export default ProjectCard
