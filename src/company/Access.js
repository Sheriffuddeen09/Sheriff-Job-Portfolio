
const Access = ({companySearchResults}) =>{

   
    const content = <>
            {
                companySearchResults.map((acces) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={acces.imagei} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{acces.titlei}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={acces.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{acces.reviewsi}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{acces.salary}</p>
                        <p>{acces.qa}</p>
                        <p>{acces.open}</p>

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

export default Access