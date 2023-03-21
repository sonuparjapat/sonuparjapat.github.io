import { createContext, useState } from "react"
export const ourprovider=createContext()
export default function ThemeProvider({children}){
    const [state,setState]=useState(false)

    const changestate=()=>{
        setState(true)
    }
    return (
        <ourprovider.Provider value={changestate}>
            {children}
        </ourprovider.Provider>

    )
}