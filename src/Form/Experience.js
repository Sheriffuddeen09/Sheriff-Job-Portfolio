import useFormContext from "./hook/useFormContext"
const Experience = () =>{

    const {data, handleChange} = useFormContext()

    return (
        <section className="translate-x-6">
            <div>
            <p className="mt-6 mb-2 sm:w-96">We share one job title with the employer to introduce you as a candidate.</p>
            <p className="font-bold ">Relevant experience <span className="text-sm font-light">(optional)</span></p>
            <div className=" border border-gray-300 w-80 sm:w-96 my-12 rounded-lg">
            <span className="flex flex-col p-3">
                <label className="">Job title </label>
                <input className="p-2 border-2 w-72 sm:w-96border-blue-400 rounded-lg mt-2"
            type='text'
             value={data.job}
             pattern="([A-Z])[\w+.]{1,}"
            onChange={handleChange}
            name="job"
             />
            </span>
            <span className="flex flex-col p-3">
            <label className="">company </label>
            <input className="p-2 border-2 border-blue-400 rounded-lg mt-2 w-72 sm:w-96"
            type='text'
            pattern="([A-Z])[\w+.]{1,}"
             value={data.companyName}
            onChange={handleChange}
            name="companyName"
             />
            </span>
            </div>
            </div>
        </section>
    )
}
export default Experience