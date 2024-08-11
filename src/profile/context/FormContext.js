import { useState, createContext } from "react";

const InfosContext = createContext({})

export const InfosProvider = ({children}) =>{
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        telNumber:'',
        selectNumber:true,
        showNumber:false,
        national:'',
        stateCity:'',
        postalCode:""

    })

    const handleChange = (e) =>{
        const type = e.target.type
        const name = e.target.name

        const value = type === 'checkbox' ? e.target.checked : e.target.value

        setData(prev => ({
            ...prev, [name] : value
        }))
    }

    const { postalCode, ...requiredInput} = data
    
    const canSubmit = [...Object.values(requiredInput)].every(Boolean)

    return (
        <InfosContext.Provider value={{handleChange, data, canSubmit, setData}}>
        {children}
        </InfosContext.Provider>
    )

}
export default InfosContext