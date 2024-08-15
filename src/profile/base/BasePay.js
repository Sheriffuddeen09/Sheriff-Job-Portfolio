import { Link } from "react-router-dom"
import Location from "./Location"

const BasePay = ({basepays, relocations}) =>{

        const content = (
            <div>
                {
                    basepays.map((basepay) =>{

                        return (
                        <>
                            <div className="flex flex-row sm:justify-between justify-around flex-wrap gap-4 lg:gap-80">
                                <span className="inline-flex gap-2 lg:-translate-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
                                </svg>



                                <span>
                                    <p  className="font-bold text-xl mb-1">Minimum base pay</p>
                                    <p>{basepay.amount},{basepay.month}</p>
                                </span>
                                </span>
                             <Link to={`/payid/${basepay.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 lg:translate-x-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                            </div>
                            <div>
                                <Location relocations={relocations} />
                            </div>
                     <hr className="my-4"/>
                    </>
                        )
                    })
                }
            </div>
        )
    
    

    return(
        <div className="flex flex-col items-center  my-6"> 
       
        <div>{content}</div>
        <hr className="my-4"/>
        
        </div>
    )
}

export default BasePay