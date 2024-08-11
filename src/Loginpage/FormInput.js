import Ship from './Ship'
import Bill from "./Bill"
import useContent from "./hook/useFormContext"
const FormInputLogin = () =>{

    const {page} = useContent()
    
    const display = {
        0: <Bill/>,
        1: <Ship/>,
    }
    return (
        <div style={{width:'300px', zIndex:'1'}}>
             {display[page]}
        </div>
    )
}
export default FormInputLogin