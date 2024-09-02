
import Colas from "./Colas"
const Cocas = ({companySearchResults}) =>{


    const content = <>
            {
                companySearchResults.map((coca) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={coca.imagel} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold text-sm">{coca.titlel}</p>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{coca.reviewsl}</p>
                        </span> 
                        </span>
                    </div>
                ))
            }
    </>
    return (
        <div className="inline-flex flex-wrap gap-4 border border-gray-200 p-2 rounded-lg flex-wrap items-center">

            {content}
             <p className="sm:translate-y-0 translate-y-10">VS</p>
             <Colas companySearchResults={companySearchResults}/>
        </div>
    )
}

export default Cocas