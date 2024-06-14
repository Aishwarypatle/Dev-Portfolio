import { Card, Box } from '@mui/material'
import React from 'react'
import mac from '../assets/images/projs.webp'
import Image from 'next/image'
const InfoLayer = () => {
  return (
    <Box className="shadow-none">
        <Box className="flex flex-col lg:flex-row justify-center gap-12 mt-20">
            <Box className="flex flex-col gap-2 items-center lg:items-end">
                <h3 class="text-6xl lg:text-8xl font-black" style={{color:"#65c3c8"}}>Fast</h3>
                <h3 class="text-6xl lg:text-8xl font-black" style={{color:"#eeaf3a"}}>Scalable</h3>
                <h3 class="text-6xl lg:text-8xl font-black"style={{color:"#ef9fbc"}}>Reliable</h3>
                <p class="text-xl font-medium opacity-80">Applications that build trust</p>
            </Box>
            <Box className="w-full lg:w-1/2">
                <Image
                    src={mac}
                    alt={"This is mac"}
                    height={1080}
                    wdith={1920}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default InfoLayer
