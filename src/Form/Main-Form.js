import Form from "./Form"
import './form.css'
import { FormProvider } from "./context/FormContext"
const MainForm = () =>{

    return (
        <div className="">
        <FormProvider>
        <Form />
        </FormProvider>
        </div>
    )
}
export default MainForm