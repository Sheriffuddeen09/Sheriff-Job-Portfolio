import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const EditJob= ({jobtitles, jobtitle, setJobtitles}) =>{

    const navigate = useNavigate()
    const [view, setView] = useState(false)

    const handleView = () =>{
        setView(!view)
    }
    const handleUpdate = (e) =>{
        const newlist = jobtitles.map((li) =>(
            li.id === jobtitle.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setJobtitles(newlist)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/jobtitle')
    }
    return(
        <>
        <div>
             <>
             <form onSubmit={handleSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
                <label className="font-bold mb-2 -mt-8 text-xl">Edit job titles</label>
            <hr className="my-0 w-full"/>
                <label className="font-bold mb-4 mt-4">What are your desired job titles?</label>
                <label className="mb-2">Add up to ten job titles</label>
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="title"
            type="text"
            value={jobtitle.title}
            onChange={handleUpdate}
            />
            <div className="inline-flex gap-8 items-center ">
           <input className={`w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6 ${view ? "block" : "hidden"}`}
            name="name"
            type="text"
            value={jobtitle.name}
            onChange={handleUpdate}
            />
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleView} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-6 relative top-3 ${view ? "block" : "hidden"}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        </div>

            <label onClick={handleView} className="my-4 text-blue-700 font-bold inline-flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
Add Another</label>
        <hr className="my-4"/>

            <div>
            <button className="bg-white border border-black p-2 mt-6 h-10 mx-2 text-red-700 rounded-lg font-bold" type="submit" >
                Delete
            </button>
            <Link to={'/jobtitle'} className="bg-white border border-black p-2 mt-6 h-16 text-blue-700 rounded-lg font-bold mx-2" >
                Cancel
            </Link>
            <button className="bg-blue-700 border-0 border-black p-2 mt-6 h-10 mx-2 text-white rounded-lg font-bold" >
                Save
            </button>
            </div>
            </form>
                </>
        </div>
        
        </>
    )
}
export default EditJob