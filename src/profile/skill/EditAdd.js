
const EditAddSkill = ({handleSubmit, setTitle, setYear, year, title}) =>{
    return(
        <>
        <div>
             <>
             <form onSubmit={handleSubmit} className="flex flex-col bg-white opacity-150 p-12 rounded-xl isolate z-10">
            <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
             <input className=" w-96 h-10 rounded-lg border-2 border-blue-700 px-2 p-1 mt-6" 
            name="year"
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
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
export default EditAddSkill