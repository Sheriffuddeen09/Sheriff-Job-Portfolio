import Ship from './Ship'
import Bill from "./Bill"
import useContent from "./hook/useFormContext"
import Experience from './Experience'
import Employee from './Employee'
const FormInput = () =>{

    const {page} = useContent()
    
    const display = {
        0: <Bill/>,
        1: <Ship/>,
        2: <Experience/>,
        3: <Employee/>,
    }
    return (
        <div style={{width:'300px', zIndex:'1'}}>
             {display[page]}
        </div>
    )
}
export default FormInput