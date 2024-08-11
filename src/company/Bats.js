
import Rey from "./Rey"

const Bats = ({companySearchResults}) =>{

    
    const content = <>
            {
                companySearchResults.map((bat) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={bat.imagej} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold text-sm">{bat.titlej}</p>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{bat.reviewsj}</p>
                        </span> 
                        </span>
                    </div>
                ))
            }
    </>
    return (
        <div className="inline-flex gap-6 border border-gray-200 p-3 rounded-lg flex-wrap items-center">

            {content}
             <p>VS</p>
             <Rey companySearchResults={companySearchResults}/>
        </div>
    )
}

export default Bats