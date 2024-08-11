import { Link, useNavigate } from "react-router-dom"
import Education from "./Education"
import Skill from "./skill/Skill"
import Certification from "./certification/Certification"
import Language from "./language/Language"
import Licence from "./licences/Licence"

const Qualifications = ({posts, educations, skills, newskill, neweducations,newlicences, languages,licences, certifications}) =>{

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

        const content = (
            <div>
                {
                    posts.map((post) =>{

                        return (
                            <div className="flex flex-row justify-center gap-28 lg:justify-between flex-wrap ">
                                <span className="inline-flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>

                                <span>
                                    <p className="font-bold text-xl mb-1">{post.title}</p>
                                    <p>{post.name},{post.email}</p>
                                </span>
                                </span>
                             <Link to={`/updateid/${post.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                            </div>
                        )
                    })
                }
            </div>
        )
    
    

    return(
        <div className="flex flex-col items-center  my-6"> 
        <div>
        <button onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
        </button>

        <div className="w-11/12">
            <h1 className="text-start text-2xl my-6 font-bold">Qualifications</h1>
            <p className="flex text-start">We use these details to show you jobs that match your unique skills and experience.</p>
        </div>
        <hr className="my-4"/>
        <div>{content}</div>
        <hr className="my-4"/>
        <div>
            <div>
                {
                    neweducations.map((neweducation) =>(
            <Education educations={educations} neweducation={neweducation}/>
        ))
                }
            </div>
            <Skill skills={skills} newskill={newskill} />
            <div>
            <Certification certifications={certifications}/>
            <Language languages={languages} />
            <Licence licences={licences} newlicences={newlicences} />
            </div>
            
        </div>
        </div>
        </div>
    )
}

export default Qualifications