import React from 'react'
import Image from 'next/image';
import userPic from '../assets/images/user_2.png'

const ImageCard = () => {
  return (
    <>
        <div class="h-80 w-80 relative">
          <div class="absolute h-80 w-60 top-10 left-6 overflow-hidden z-10">
            <Image
              src={userPic} 
              alt="Aishwary Patle" 
              loading="lazy" 
              width="2316" 
              height="3434" decoding="async" data-nimg="1"  
              />
          </div>
          <div class="absolute h-64 w-64 bottom-0 translate-y-10 blue-box rounded-full shadow-2xl"></div>
          <div class="absolute h-40 w-40 bottom-0 right-0 red-box rounded-full opacity-50"></div>
          <div class="absolute h-40 w-40 top-10 right-10 yellow-box rounded-full opacity-80"></div>
        </div>
    </>
  )
}

export default ImageCard
