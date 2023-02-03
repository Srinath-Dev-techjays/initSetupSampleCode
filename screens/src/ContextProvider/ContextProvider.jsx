import React from 'react';

const InitContext = React.createContext();

const InitProvider = ({children}) =>{
    const [num,setNum] = React.useState(0);
    const [bool, setBool] = React.useState(false);
    const [str, setStr] = React.useState([]);

    return(
        <InitContext.Provider value = {{
            num,setNum,bool, setBool,str, setStr
        }}>
            {children}
        </InitContext.Provider>
    )
}

export { InitContext, InitProvider };

//axios