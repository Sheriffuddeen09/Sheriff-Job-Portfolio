import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const EmailEditPhone = ({phones, phone, setPhones}) =>{

    const navigate = useNavigate()
    const handleUpdate = (e) =>{
        const newlist = phones.map((li) =>(
            li.id === phones.id ? {...li, [e.target.name] : e.target.value} : li
        ))
        setPhones(newlist)
    }

    const handleForm = (e) =>{
        e.preventDefault()
        navigate('/setting')
    }
    return (

        <div className=" border border-black mt-32 p-4 w-96 flex flex-col items-center rounded-lg mx-auto h-60">
            <h1 className="text-xl font-bold mx-2 mb-2">Changing phones address for {phones.name}</h1>
            <form onSubmit={handleForm} className="flex flex-col">
                <label className="mr-48 mt-2 font-bold">New phones address</label>
                <input type="text" name="phone" placeholder="Edit text" 
                className='border-2 border-blue-700 rounded-lg px-2 mt-1 p-1'
                value={phone.phone} onChange={handleUpdate}
                />
                <div className="inline-flex gap-20 items-center my-4">
                <button type="submit" className=" p-2 w-36 rounded-lg text-white bg-blue-700"> Save</button>
                <Link to={'/job'}><p className="font-bold text-blue-700">Cancel change</p></Link>
                </div>
            </form>
        </div>
    )
}
export default EmailEditPhone