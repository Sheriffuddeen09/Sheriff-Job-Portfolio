import { Link, useNavigate, useParams } from "react-router-dom"
import NewEducation from "./skill/NewEducation"


const EducationId = ({educations, neweducations}) =>{

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const {id} = useParams()
    const education = educations.find((education) => (education.id).toString() === id) 
        const content = (
            <div>
                { education &&
                   <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={goBack} className='w-6 cursor-pointer mt-6'>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
                        
                            <div className="">
                                    <p className="font-bold text-3xl mb-6 mt-3">{education.title}</p>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between gap-20 flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{education.titlea}</p>
                                    <p className="mb-2">{education.name}</p>
                                    </span>
                                    <Link to={`/edu/${education.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{education.titleb}</p>
                                    <p className="mb-4">{education.degree}</p>
                                    </span>
                                    <Link to={`/educ/${education.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between flex-wrap gap-20 lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{education.titlec}</p>
                                    <p className="mb-4">{education.level}</p>
                                    </span>
                                    <Link to={`/educa/${education.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                <hr className="my-4"/>
                               <NewEducation neweducations={neweducations} />
                                <hr className="my-4"/>
                                <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2 text-blue-700">{education.add}</p>
                                   
                                    </span>
                                    <Link to={`/newedu/${education.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-1 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                <hr className="my-4"/>


                            </div>
                      </div>
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

export default EducationId