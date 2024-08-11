
const Rey = ({companySearchResults}) =>{

 
    const content = <>
            {
                companySearchResults.map((rey) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={rey.imagek} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold text-sm">{rey.titlek}</p>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{rey.reviewsk}</p>
                        </span> 
                        </span>
                    </div>
                ))
            }
    </>
    return (
        <div>

            {content}

        </div>
    )
}

export default Rey