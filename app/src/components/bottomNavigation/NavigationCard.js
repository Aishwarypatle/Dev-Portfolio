import { BottomNavigation, BottomNavigationAction, Card } from '@mui/material'
import React from 'react'
import Link from 'next/link'

const NavigationCard = () => {
    const menuItems = [
        {
            label : "Skills",
            link : "/skills"
        },
        {
            label : "Experience",
            link : "/experience"
        },
        {
            label : "Projects",
            link : "/projects"
        },
        {
            label : "Contact",
            link : "/contact"
        },
        {
            label : "About",
            link : "/about"
        },
    ]
  return (
   <>
       <BottomNavigation
            sx={{ position: "absolute",bottom: "40px",left: 0,right: 0 , backgroundColor :'transparent' }}
            showLabels
            >
            {
                menuItems?.map((item , index) => (
                    <BottomNavigationAction 
                        key={index}
                        component={Link}  
                        label={item?.label} 
                        href={item?.link}
                    />
                ))}
        </BottomNavigation>
   </>
  )
}

export default NavigationCard
