import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom';



// component import
import Header from '../components/Header'



const Root = () => {
   const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
     });

  
  const handleDarkMode = () => {
      setDarkMode((prevState) => {
           const newState = !prevState;
           localStorage.setItem("theme",  newState ? "dark": "light");
           return newState;
       })
    }

    useEffect(()=> {
        if(darkMode){
            document.documentElement.classList.add("dark");
         }
         else {
             document.documentElement.classList.remove("dark");
         }
    }, [darkMode])

  return (
    <div>
         <Header />


         <Outlet />   
    </div>
  )
}

export default Root
