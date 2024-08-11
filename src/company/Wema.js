
const Wema = ({companySearchResults}) =>{

    
    const content = <>
            {
                companySearchResults.map((wema) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={wema.imaged} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold">{wema.titled}</p>
                        <span className="inline-flex items-center gap-2">
                        <img src={wema.star} alt="star" className="h-4 w-20"/>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{wema.reviewsd}</p>
                        </span>
                        </span> 
                        </span>
                        <span className="inline-flex gap-10 px-4"> 
                        <p>{wema.salary}</p>
                        <p>{wema.qa}</p>
                        <p>{wema.open}</p>

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

export default Wema