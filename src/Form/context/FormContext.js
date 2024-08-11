import { useState, createContext } from "react";

const FormContext = createContext({})

const title = {
    0: " Create an Account",
    1: "Add a resume for the employer",
    2: "Enter a job that shows relevant experience",
    3: "Answer these questions from the employer",
    4: "This employer is Looking for these Qualification"  
}

export const FormProvider = ({children}) =>{

    const [page, setPage] = useState(0)
    const [pdfError, setPdfError] = useState('')
    const [data, setData] = useState({
        billFirstName: '',
        billLastName: '',
        cityState: '',
        passWord:'',
        phoneNumber:'',
        message:'',
        Email:'',
        country:'',
        companyName:'',
        job:'',
        pdfFile: '',
        toggle:false
    })

    const handleChange = (e) =>{
        const type = e.target.type
        const name = e.target.name

        const value = type === 'checkbox' ? e.target.checked : e.target.value

        setData(prev => ({
            ...prev, [name] : value
        }))
    }

    const allowedFiles = ['application/pdf']

    const handleFile = (e) =>{

        let selectedFile = e.target.files[0]

        if(selectedFile){
            if(selectedFile&&allowedFiles.includes(selectedFile.type)){
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onloadend = (e)=>{
                    setPdfError('')
                    setData(e.target.result)
                    console.log(e.target.result)
                }
            }
            else{
                console.log('please select a PDF')
            }
        }
    }
    const { message, cityState, phoneNumber, country, ...requiredInput} = data
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
        <FormContext.Provider value={{handleChange, data, setData, page, setPage, title, canSubmit, prevHide, disablePrev, submitHide, pdfError, nextHide, handleFile, disableNext}}>
        {children}
        </FormContext.Provider>
    )

}
export default FormContext