import React, { createContext, useState } from 'react'
import CompB from './CompB'
import CompD from './CompD';


export const MyContext= createContext();//1.creating cntext

export default function CompA() {

    const[data, setData] = useState({
        "Name":{
            "name1":"Nithin",
            "name2":"Nikhil"
        },
        "Age":{
            "age1":"19",
            "age2":"20"
        }
    })


   
  return (
    <div className='box'>
         ComponentA
         
         {/* 2.providing data into B , becaues it can pass to others */}
        <MyContext.Provider value={data}> 
                 <CompB/>

        </MyContext.Provider>
     
      
    </div>
  )
}
