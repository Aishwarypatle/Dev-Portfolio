import Image from 'next/image'
import React from 'react'
import apple from '../assets/logos/apple.png'
import react from '../assets/logos/react.png'
import js from '../assets/logos/js.png'
import express from '../assets/logos/express.svg'
import postSql from '../assets/logos/postgresql.svg'

export const SkilBox = () => {
  return (
    <>
        <div class="absolute h-full w-full opacity-40">
          <div class="relative h-full flex items-center justify-center">
            <div class="h-[24rem] w-[24rem] md:h-[40rem] md:w-[40rem] max-w-full max-h-full relative animate-spin slow-spin">
              <div class="absolute top-0 right-10 md:right-32">
                <Image src={react} alt="Android apps" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" style="color:transparent" />
              </div>
              <div class="absolute bottom-0 left-40 md:left-72">
                <Image src={js} alt="iOS apps" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" style="color:transparent" />
              </div>
              <div class="absolute top-1/2 left-0">
                <Image src={express} alt="Web apps" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" style="color:transparent" />
              </div>
              <div class="absolute top-1/2 right-0">
                <Image src={postSql} alt="Play Store ready" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" style="color:transparent" />
              </div>
              <div class="absolute left-10 md:left-32">
                <Image src={apple} alt="App Store ready" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" style="color:transparent" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
