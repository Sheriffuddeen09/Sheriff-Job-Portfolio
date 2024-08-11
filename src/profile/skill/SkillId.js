import { Link, useNavigate, useParams } from "react-router-dom"
import NewSkill from "./NewSkill"

const SkillId = ({skills, newskills}) =>{


    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const {id} = useParams()
    const skill = skills.find((skill) => (skill.id).toString() === id) 

    
        const content = (
            <div>
                { skill &&
                   <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={goBack} className='w-6 cursor-pointer mt-6'>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
                        
                            <div className="">
                                    <p className="font-bold text-3xl mb-6 mt-3">{skill.title}</p>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between gap-44 flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{skill.titlea}</p>
                                    <p className="mb-2">{skill.yeara}</p>
                                    </span>
                                    <Link to={`/ski/${skill.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{skill.titleb}</p>
                                    <p className="mb-4">{skill.yearb}</p>
                                    </span>
                                    <Link to={`/skil/${skill.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                    <hr className="my-4"/>

                                    <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2">{skill.titlec}</p>
                                    <p className="mb-4">{skill.yearc}</p>
                                    </span>
                                    <Link to={`/skills/${skill.id}`}>   
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </Link>    
                                    </div>
                                    <hr className="my-4"/>

                                <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                <span>
                                <p className="font-bold mb-2">{skill.titled}</p>
                                <p className="mb-4">{skill.yeard}</p>
                                </span>
                                <Link to={`/skillss/${skill.id}`}>   
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke-width="1.5" stroke="currentColor" class="size-6 translate-y-3 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                                </Link>    
                                </div>
                                <hr className="my-4"/>
                                   <NewSkill newskills={newskills}/>
                                   <hr className="my-4"/>
                                <div className="flex flex-row justify-between flex-wrap lg:gap-80">
                                    <span>
                                    <p className="font-bold mb-2 text-blue-700">Add Another Skill</p>
                                    </span>
                                    <Link to={`/skillsss/${skill.id}`}>   
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

export default SkillId