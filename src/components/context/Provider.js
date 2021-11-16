import { createContext, useState } from "react";

export const openContext = createContext();

export default function Provider({children}){
    const[open, setOpen] = useState(false) 
    const onOpenClick = ()=>{
        setOpen(!open)
    }

    return(
        <div>
            <openContext.Provider value={{
                open, onOpenClick
            }}>
                {children}
            </openContext.Provider>
        </div>
    )
}