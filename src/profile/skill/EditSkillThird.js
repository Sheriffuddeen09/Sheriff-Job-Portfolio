import { useNavigate } from "react-router-dom"

const EditSkillThird= ({skill, skills, setSkills}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = skills.map((li) =>(
            li.id === skill.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setSkills(newlist)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/qualify')
    }
    return(
        <>
        <div>
             <>
             <form onSubmit={handleSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="titlec"
            type="text"
            value={skill.titlec}
            onChange={handleUpdate}
            />
             <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6" 
            name="yearc"
            type="text"
            value={skill.yearc}
            onChange={handleUpdate}
            />
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-xl font-bold" type="submit" >
                Save
            </button>
            </form>
                </>
        </div>
        
        </>
    )
}
export default EditSkillThird