

const Colas = ({companySearchResults}) =>{


    const content = <>
            {
                companySearchResults.map((cola) =>(
                    <div className="flex flex-col">
                        <span className="inline-flex p-4 gap-2">
                            <img src={cola.imagem} alt="imagecompany"/>   
                        <span>                    
                        <p className="font-bold text-sm">{cola.titlem}</p>
                        <p style={{fontSize:'12px'}} className=" text-blue-400" >{cola.reviewsm}</p>
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

export default Colas