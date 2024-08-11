import ReactFlagsSelect from "react-flags-select"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import useInfosContext from "./hook/useFormContext"

const ProfileForm = ({edits}) =>{

    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const {data, handleChange, canSubmit} = useInfosContext()

    const handleSumbit = (e) =>{
        e.preventDefault()
        console.log(JSON.stringify(data))
        navigate('/user')
    }

    const content = (
        <div>
            {
                edits.map((edit) =>(
                    <div className="mt-2 mb-4 ml-4">
                        <p className="font-bold mb-2 text-xl">Email</p>
                        <div className="flex justify-between gap-10 lg:gap-72">
                            <p>{edit.name}</p>
                           <Link to={`/update/${edit.id}`}> <p className="inline-flex re;ative lg:-translate-x-8 text-blue-700 font-bold items-center gap-2">Edit <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</p>
</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )

    return (
        <form onSubmit={handleSumbit} className="mx-auto">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onClick={goBack} className='w-6 translate-x-24 cursor-pointer mt-6'>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
            <div>
            <span className=" flex flex-col items-center justify-center m-4">
                <label className="lg:mr-96 mr-48 lg:-translate-x-4  text-xl font-bold">First name </label>
                <input className="w-72 border-black border py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                type='text' 
                placeholder="Firstname"
                pattern="([A-Z])[\w+.]{1,}"
             />
            </span>
            <span className="flex flex-col m-4 items-center">
            <label className="lg:mr-96 mr-48 lg:-translate-x-4  text-xl font-bold">Last name </label>
            <input className="w-72 border-black border py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
            type='text' placeholder="Lastname"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            pattern="([A-Z])[\w+.]{1,}"
             />
            </span>
            <div className="flex flex-col m-4 items-center">
                <p className=" text-xl font-bold lg:mr-96 mr-48 lg:-translate-x-8  text-xl font-bold">Phone</p>
                <div className="inline-flex gap-2 lg:mr-32">
                <ReactFlagsSelect 
                className="w-20 lg:w-40 mt-4 h-8 rounded-lg "
                placeholder='.'
                searchPlaceholder="Input pick up location"
                name="selectNumber"
                value={data.selectNumber}
                onSelect={handleChange}
                searchable
                />
        
            <input className="w-48 border-black border py-1 px-4 lg:w-full mt-4 h-10 rounded-lg"
            type='text'
            pattern="[\w\d\s.#]{2,}"
            name="telNumber"
            value={data.telNumber}
            onChange={handleChange}
             />
             </div>
             <div className="flex flex-col items-center">
             <div className="mt-4 inline-flex gap-4 items-center mr-10 lg:mr-64 lg:-translate-x-2">
                <input type="checkbox" className="w-10
                 checkbox p-4" 
                 name="showNumber"
                value={data.showNumber}
                onChange={handleChange}/>
                <label className="">Show my number on Indeed</label>
             </div>
             <p className="lg:w-5/12 w-72 mt-2 ml-3 lg:-translate-x-16 lg:ml-32  text-sm">By submitting the form with this box checked, you confirm that you are the primary user and subscriber to the telephone number provided, and you agree to receive calls (including using artificial or pre-recorded voice), texts, and WhatsApp messages from Indeed and employers who use Indeed at the telephone number provided above.</p>
             </div>
             <div>
                {content}
             </div>
             <hr className="w-80 my-4 ml-10 lg:mr-12 lg:w-5/12 bg-blue-700 content"/>
             <div className="ml-12 lg:mr-16 lg:w-5/12 w-80">
                <h1 className="font-bold text-xl my-4">Location</h1>
                <p>This helps match you with nearby jobs.</p>
                <p>Indeed may use the address you provide below to give you an approximate commute time to a job's location which will only be visible to you. </p>
             </div>
            </div>
            </div>
            <div className="">
            <span className="flex flex-col items-center justify-center m-4">
                <p className="lg:mr-96 mr-56 lg:translate-x-0  text-xl font-bold">Country</p>
            <select className="w-72 border-black border lg:-translate-x-4 py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
            name="national"
            value={data.national}
            onChange={handleChange}
            type='text'
           >
                <option value=''></option>
                <option value='nig'>Nigeria</option>
                <option value='alg'>Algeria</option>
                <option value='bel'>Belgium</option>
                <option value='gha'>Ghana</option>
                <option value='bra'>Brazil</option>
                <option value='usa'>Spain</option>
                <option value='usa'>France</option>
                <option value='usa'>Portugal</option>
                <option value='usa'>Morroco</option>
                <option value='usa'>Englang</option>
                <option value='usa'>Argentina</option>
            </select>
            </span>
            <div className="flex flex-col items-center justify-center m-4">
            <p className="lg:mr-96 mr-40 lg:translate-x-0  text-xl font-bold">Street address</p>
            <input className="w-72 border-black border lg:-translate-x-4 py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
            type='text' placeholder=""
            name="address"
            value={data.address}
            onChange={handleChange}
             pattern="([A-Z])[\w\s.]{1,}"
           
             />
            </div>
            <div className="flex flex-col items-center justify-center m-4">
            <p className="lg:mr-96 mr-52 lg:translate-x-0  text-xl font-bold">City,State</p>
            <input className="w-72 border-black border lg:-translate-x-4 py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
            type='text' placeholder=""
            name="stateCity"
            value={data.stateCity}
            onChange={handleChange}
             pattern="([A-Z])[\w\s.]{1,}"
           
             />
            </div>
            <div className="flex flex-col items-center justify-center m-4">
            <p className="lg:mr-96 mr-44 lg:translate-x-0  text-xl font-bold">Postal code</p>
            <input className="w-72 border-black border lg:-translate-x-4 py-1 px-4 lg:w-5/12 mt-4 h-10 rounded-lg"
            type='text' placeholder=""
            name="postalCode"
            value={data.postalCode}
            onChange={handleChange}
             pattern="([A-Z])[\w\s.]{1,}"
           
             />
            </div>
            <button disable={!canSubmit} className="bg-blue-700 w-72 text-white text-xl flex items-center  justify-center mx-auto lg:w-96 h-10 mb-10 rounded-lg">Save</button>
            </div>
            
        </form>
    )
}
export default ProfileForm