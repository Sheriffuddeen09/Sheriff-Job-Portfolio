
const AddEducation = ({handleSubmits, setText, setYears, years, text}) =>{
    return(
        <>
        <div>
             <>
             <form onSubmit={handleSubmits} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
             <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6" 
            name="years"
            type="text"
            value={years}
            onChange={(e) => setYears(e.target.value)}
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
export default AddEducation