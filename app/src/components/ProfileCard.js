import { Card } from '@mui/material'
import React from 'react'
import { SkilBox } from './SkilBox'
import ImageCard from './ImageCard'

const ProfileCard = () => {
  return (
    <>
        <Card className='h-screen flex flex-col items-center justify-center relative w-screen'>
            <SkilBox />
            <ImageCard />
            <div>
              <h1 class="z-20 text-4xl md:text-6xl font-bold text-center opacity-80 mt-0 md:mt-2">Aishwary Patle</h1>
              <h2 class="text-center mt-2">Software Engineer - Web &amp; Mobile</h2>
            </div>
        </Card>
    </>
  )
}

export default ProfileCard
