import useFormContext from "./hook/useFormContext"
const Bill = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section>
            <div>
            <div className="">
            <span className="span1">
                <label className="label1">FirstName </label>
                <input className="input2"
            type='text' placeholder="Firstname"
             value={data.billFirstName}
             pattern="([A-Z])[\w+.]{1,}"
            onChange={handleChange}
            name="billFirstName"
             />
            </span>
            <span className="span1">
            <label className="label2">LastName </label>
            <input className="input2"
            type='text' placeholder="Lastname"
            pattern="([A-Z])[\w+.]{1,}"
             value={data.billLastName}
            onChange={handleChange}
            name="billLastName"
             />
            </span>
            </div>
            <div>
                <p className="label1">Email</p>
            <input className="input3"
            type='text' placeholder="@mail.com"
             value={data.Email}
            onChange={handleChange}
            pattern="[\w\d\s.#]{2,}"
            name="Email"
             />
            </div>
            </div>
            <div>
            <p className="label1">City,State <span className="text-sm">(optional)</span></p>
            <input className="input3"
            type='text' placeholder="Company name"
             value={data.cityState}
             name="companyName"
             pattern="([A-Z])[\w\s.]{1,}"
            onChange={handleChange}
             />
            </div>
            <div className="div1">
            <span className="span1">
                <p className="label1">Country <span className="text-sm">(optional)</span></p>
            <select className="input3"
            type='text'
             value={data.country}
            name='companyAddress'
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
            <span>
            <p className="label1"> Phone Number <span className="text-sm">(optional)</span></p>
            <input className="input3"
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