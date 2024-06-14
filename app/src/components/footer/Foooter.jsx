'use client'
import { Button, Card, Grid} from '@mui/material'
import { SocialMenu } from '../../constant/constant'
import React from 'react'


const Foooter = () => {
  const handleClick = (link) => {
    link?.includes("@") ? window.location.href = 'mailto:' + link : window.open(link,"_blank"); 
  }
  return (
        <>
          <Card className='bg-black w-screen p-10'>
            <Grid container direction={"row"} justifyContent={"center"}>
              {
                SocialMenu?.map((item,index) => (
                    <Button key={index} onClick={() => handleClick(item?.link)}>
                        {item?.icon}
                    </Button>
                ))
              }
            </Grid>
            <p className='flex justify-center text-white mt-2 font-sans'>Aishwary.dev  ©  2023</p>
          </Card>
        </>
  )
}

export default Foooter
