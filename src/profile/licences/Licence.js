import { Link } from "react-router-dom"
import NewLicence from "./NewLicence"

const Licence = ({licences, newlicences}) =>{

        const content = (
            <div>
                {
                    licences.map((licence) =>{

                        return (
                        <>
                            <div className="flex flex-row justify-between flex-wrap gap-4 lg:gap-64">
                                <span className="inline-flex gap-2 lg:-translate-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>


                                <span>
                                    <p  className="font-bold text-xl mb-1">{licence.title}</p>
                                    <p>{licence.from} to {licence.to}</p>
                                </span>
                                </span>
                             <Link to={`/licence/${licence.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 lg:translate-x-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                            </div>
                     <NewLicence newlicences={newlicences} />
                     <hr className="my-4"/>
                         <div className="flex flex-row sm:justify-between justify-around gap-8 sm:gap-0 flex-wrap lg:gap-60">
                         <span>
                         <p className="font-bold mb-2 text-blue-700">Add Another Licence</p>
                         </span>
                         <Link to={`/licen/${licence.id}`}>   
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                 </Link>    
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

export default Licence