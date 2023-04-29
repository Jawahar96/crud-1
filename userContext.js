import { createContext, useState } from "react";
import Student from "./Student";
import Teachers from "./Teachers";


let StudentContext=createContext()


export const  Students=({children,children2})=>{
 const [student,setStudent]=useState("Jawahar")
 const[Teachers,setTeachers]=useState(false)
  return(
    <StudentContext.Provider value={{student ,setStudent,Teachers,setTeachers}}>
        {children} {children2}
    </StudentContext.Provider>
  )
}


export default StudentContext