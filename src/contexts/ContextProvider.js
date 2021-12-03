import React, {createContext} from 'react'

export  const CustomContext = createContext(null)

function ContextProvider({children}){
    return(

        <CustomContext.Provider >
              {children}
        </CustomContext.Provider>
    )
}


export default ContextProvider;



