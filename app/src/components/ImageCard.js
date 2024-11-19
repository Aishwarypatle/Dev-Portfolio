import React from 'react'
import Image from 'next/image';
import userPic from '../assets/images/aishhhppp (1).png'

const ImageCard = () => {
  return (
    <>
        <div class="h-80 w-80 relative">
          <div class="absolute h-80 w-60 top-4 left-4 overflow-hidden z-10">
            <Image
              src={userPic} 
              alt="Aishwary Patle" 
              loading="lazy" 
              width="2316" 
              height="3434" decoding="async" data-nimg="1"  
              />
          </div>
          <div class="absolute h-72 w-72 bottom-0 right-20 translate-y-10 blue-box rounded-full shadow-2xl"></div>
          <div class="absolute h-44 w-44 bottom-2 right-0 red-box rounded-full opacity-50"></div>
          <div class="absolute h-40 w-40 top-6 right-10 yellow-box rounded-full opacity-80"></div>
        </div>
    </>
  )
}

export default ImageCard
