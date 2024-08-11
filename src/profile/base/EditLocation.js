import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const EditLocation= ({relocation, relocations, setRelocations}) =>{

    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const handleUpdate = (e) =>{
        const newlist = relocations.map((li) =>(
            li.id === relocation.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setRelocations(newlist)
    }

    const handleView = () =>{

        setView(!view)
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
            <label className="font-bold text-xl">Add relocation</label>
            <hr className="my-4"/>
            <span className="inline-flex gap-2 items-center">
            <input className="w-6 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            onChange={handleView}
            type="checkbox" />
            <label>Yes I'm willing to locate</label>
            </span>
            <span className={`inline-flex gap-2 items-center mb-2 mt-4 ${view ? "block" : "hidden"}`}>
            <input className=" w-52 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            type="text"
            name="true"
            value={relocation.true}
             onChange={handleUpdate}
            />
            <label>Yes/No</label>
            </span>
            <span className={`inline-flex gap-2 items-center ${view ? "block" : "hidden"}`}>
             <input className={` w-52 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 ${view ? "block" : "hidden"}`}
            name="title"
            type="text"
            value={relocation.title}
            onChange={handleUpdate}
            />
            <label>Am willing to relocate/I'm not willing to Relocate</label>
            </span>
            <div>
            <Link to={'/jobtitle'} className="bg-white border border-black p-2 mt-6 h-16 text-blue-700 rounded-lg font-bold mx-2" >
                Cancel
            </Link>
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-sm w-20 font-bold" type="submit" >
                Save
            </button>
            </div>
            </form>
                </>
        </div>
        
        </>
    )
}
export default EditLocation