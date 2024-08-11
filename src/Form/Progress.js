import useFormContext from "./hook/useFormContext"
import { useMemo } from "react"
const Progress = () => {
    const {page, title} = useFormContext()
   
 
    return useMemo(() => {
    
    const interval = 100 / Object.keys(title).length
    const progress = ((page + 1) * interval).toFixed(2)


    
    return(

        <div>
            
            <progress 
            value={progress}
            max={100}
            />
        </div>
    ) 

    }, [page,title])
}
export default Progress