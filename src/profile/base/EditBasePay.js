import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const EditBasePay= ({basepays, basepay, setBasePays, handleDeleted}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = basepays.map((li) =>(
            li.id === basepay.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setBasePays(newlist)
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

                <label className="text-2xl font-bold -mt-8">Edit Pay</label>
                <hr className="my-4"/>
                <label>What is the minimum pay you'll consider in your search?</label>
            <div className="inline-flex items-center gap-2">
            <span className="flex flex-col">
            <label className="font-bold mt-2">Minimum base pay</label>
            <input className=" w-72 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mb-4"
            name="amount"
            type="text"
            value={basepay.amount}
            onChange={handleUpdate}
            />
            </span>
            <span className="flex flex-col">
            <label className="font-bold mt-2">Pay period</label>
            <select name="month" value={basepay.month} className="w-72 border-blue-700 h-10 p-1 w-24 rounded-lg mb-4 border-2 " onChange={handleUpdate}>
                <option>select</option>
                <option>per month</option>
                <option>per year</option>
                <option>per hour</option>
                <option>per day</option>
                <option>per week</option>
            </select>
            </span>
            </div>
            <hr className="my-4"/>

            <div>
            <button onClick={handleDeleted} className="bg-white border border-black p-2 mt-6 h-10 mx-2 text-red-700 rounded-lg font-bold" type="submit" >
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
export default EditBasePay