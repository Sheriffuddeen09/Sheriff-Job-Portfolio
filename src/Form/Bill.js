import useFormContext from "./hook/useFormContext"
const Bill = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section className="ml-10 sm:ml-0">
            <div>
            <div className="">
            <span className="flex flex-col p-3">
                <label className="">FirstName </label>
                <input className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text' placeholder="Firstname"
             value={data.billFirstName}
             pattern="([A-Z])[\w+.]{1,}"
            onChange={handleChange}
            name="billFirstName"
             />
            </span>
            <span className="flex flex-col p-3">
            <label className="">LastName </label>
            <input className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text' placeholder="Lastname"
            pattern="([A-Z])[\w+.]{1,}"
             value={data.billLastName}
            onChange={handleChange}
            name="billLastName"
             />
            </span>
            </div>
            <div className="flex flex-col p-3">
                <p className="">Email</p>
            <input className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text' placeholder="@mail.com"
             value={data.Email}
            onChange={handleChange}
            pattern="[\w\d\s.#]{2,}"
            name="Email"
             />
            </div>
            </div>
            <div className="flex flex-col p-3">
            <p className="">City,State <span className="text-sm">(optional)</span></p>
            <input className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text' placeholder="Company name"
             value={data.cityState}
             name="cityState"
             pattern="([A-Z])[\w\s.]{1,}"
            onChange={handleChange}
             />
            </div>
            <div className="">
            <span className="flex flex-col p-3">
                <p className="">Country <span className="text-sm">(optional)</span></p>
            <select className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text'
             value={data.country}
            name='country'
            onChange={handleChange}>
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
            <span className="flex flex-col p-3">
            <p className=""> Phone Number <span className="text-sm">(optional)</span></p>
            <input className="p-2 border-2 border-blue-400 rounded-lg mt-2"
            type='text' placeholder="+234"
             value={data.phoneNumber}
             name="phoneNumber"
             pattern="[\w\d\s.#]{2,}"
            onChange={handleChange}
             />
            </span>
            </div>
        </section>
    )
}
export default Bill