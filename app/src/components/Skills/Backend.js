import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { backendImages } from '../../constant/constant'

const Backend = () => {
  return (
    <>
      <Card className='shadow-none'>
        <div className='grid grid-cols-4 gap-12'>
          {
            backendImages?.map((item,index) => (
              <div className='flex flex-col justify-center items-center' key={index}>
                <div className='rounded-full p-4 md:p-8 bg-slate-100'>
                  <Image
                    alt={item?.label}
                    src={item?.src}
                    width={60}
                    height={60}
                  />
                </div>
                <p className='mt-2 font-medium'>{item?.label}</p>
              </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default Backend
