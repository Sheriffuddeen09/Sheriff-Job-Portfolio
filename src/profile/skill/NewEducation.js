import { Link } from "react-router-dom"
const NewEducation = ({neweducations}) =>{

        const content = (
            <div>
              {
                neweducations.map((neweducation) =>{
                    return(
                        <div className="flex flex-row justify-between flex-wrap gap-52 lg:gap-80">
                        <span>
                        <p className="font-bold mb-2">{neweducation.title}</p>
                        <p className="mb-4">{neweducation.year}</p>
                        </span>
                        <Link to={`/newsedu/${neweducation.id}`}>   
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        </Link>    
            
                </div>
                )})
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

export default NewEducation