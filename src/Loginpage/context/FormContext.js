import { useState, createContext } from "react";

const FormContext = createContext({})

const title = {
    0: " Create an Account",
    1: "Create an New Password",
}

export const FormProvider = ({children}) =>{

    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        billFirstName: '',
        billLastName: '',
        companyAddress: '',
        passWord:'',
        phoneNumber:'',
        Email:'',
        companyName:''
    })

    const handleChange = (e) =>{
        const type = e.target.type
        const name = e.target.name

        const value = type === 'checkbox' ? e.target.checked : e.target.value

        setData(prev => ({
            ...prev, [name] : value
        }))
    }

    const {...requiredInput} = data
    const starter ={
        0: 'bill',
        1: 'ship'
    }
    const canNextButton = Object.keys(data)
    .filter(key => key.startsWith(starter[page]) && key !== `${starter[page]}Address2`)
    .map(key => data[key])
    .every(Boolean)

    const disablePrev = page === 0
    const disableNext = (page === Object.keys(title).length - 1) 
    ||(page === 0 && !canNextButton )
    ||(page === 1 && !canNextButton )

    const nextHide = page === Object.keys(title).length - 1 && 'remove' 
    const prevHide = page === 0 && 'remove' 
    const submitHide = page !== Object.keys(title).length - 1 && 'remove' 
    const canSubmit = [...Object.values(requiredInput)].every(Boolean) && page === Object.keys(title).length - 1

    return (
        <FormContext.Provider value={{handleChange, data, setData, page, setPage, title, canSubmit, prevHide, disablePrev, submitHide, nextHide, disableNext}}>
        {children}
        </FormContext.Provider>
    )

}
export default FormContext