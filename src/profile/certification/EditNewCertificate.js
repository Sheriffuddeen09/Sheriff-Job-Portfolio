import { useNavigate } from "react-router-dom"

const EditNewCertificate= ({newcertificate, newcertificates, setNewcertificates}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = newcertificates.map((li) =>(
            li.id === newcertificate.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setNewcertificates(newlist)
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
            name="title"
            type="text"
            value={newcertificate.title}
            onChange={handleUpdate}
            />
             <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6" 
            name="name"
            type="text"
            value={newcertificate.name}
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
export default EditNewCertificate