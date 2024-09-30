import { useNavigate } from "react-router-dom"

const EditLicence= ({licences, licence, setLicences}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = licences.map((li) =>(
            li.id === licence.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setLicences(newlist)
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
            <input className=" w-60 sm:w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="title"
            type="text"
            value={licence.title}
            onChange={handleUpdate}
            />
            <span>
            <select name="from" value={licence.from} className="border-black w-60 sm:w-96 p-1 w-24 rounded-lg my-4 border-2 " onChange={handleUpdate}>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
            </select>
            <select name="to" value={licence.to} onChange={handleUpdate} className="border-black p-1 w-24 rounded-lg my-4 border-2 mx-2">
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
                <option>2012</option>
                <option>2011</option>
                <option>2010</option>
                <option>2009</option>
                <option>2008</option>
            </select>

            </span>
            <button className="bg-blue-700 text-white mt-6 h-10 rounded-lg text-xl font-bold" type="submit" >
                Save
            </button>
            </form>
                </>
        </div>
        
        </>
    )
}
export default EditLicence