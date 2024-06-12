"use client"
import { BottomNavigation, BottomNavigationAction, Card } from '@mui/material'
import React, { useState } from 'react'
import Link from 'next/link'
import { menuItems } from '../../constant/constant'

const NavigationCard = () => {
    
    const [ selectedMenu , setSelectedMenu ] = useState("home")
    const handleNavigationChange = (e , val) => {
        setSelectedMenu(e)
        console.log({e})
    }
  return (
   <>
       <BottomNavigation
            sx={{ position: "absolute",bottom: "40px",left: 0,right: 0 , backgroundColor :'transparent' }}
            showLabels
            value={selectedMenu}
            onChange={(e , val) => handleNavigationChange(val)}
        >
        {
            menuItems?.map((item , index) => (
                <BottomNavigationAction 
                    value={item?.value}
                    key={index}
                    label={item?.label} 
                    component={Link}  
                    href={item?.link}
                    sx={{ backgroundColor : "aliceblue" , borderRadius :"30px" , paddingInline:"10px"}}
                />
        ))}
        </BottomNavigation>
   </>
  )
}

export default NavigationCard
