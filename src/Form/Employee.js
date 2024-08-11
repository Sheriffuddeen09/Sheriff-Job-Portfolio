import useFormContext from "./hook/useFormContext"
const Employee = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section className="translate-x-4">
            <div>
            
            <span className="span1">
            <label className="translate-x-4 mt-6 text-sm w-96">Please list 2-3 dates and time ranges that you could do an interview.<span className="text-sm">(optional)</span> </label>
            <textarea className="w-96 h-48 border p-4 border-gray-400 rounded-lg mt-2 mb-6"
            type='text'
            pattern="([A-Z])[\w+.]{1,}"
             value={data.message}
            onChange={handleChange}
            name="message"
             />
            </span>
            </div>
        </section>
    )
}
export default Employee